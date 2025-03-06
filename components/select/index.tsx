import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { ArrowDownIcon } from 'assets/icons';
import { X } from 'lucide-react-native';
import { forwardRef, ReactNode, useCallback, useEffect, useRef } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { cn } from 'utils';

import { useColorScheme } from 'nativewind';
import { SelectBottomSheet } from './select-bottom-sheet';

type OptionValue = any;

type SelectOption = {
  label: string | ReactNode;
  value: OptionValue;
};

type SelectItemProps = SelectOption & {
  isActive?: boolean;
  onPress: () => void;
};

const SelectItem = ({ label, onPress, isActive }: Omit<SelectItemProps, 'value'>) => {
  return (
    <TouchableOpacity
      className="border-foreground-disabled flex-row items-center justify-between border-b py-5"
      onPress={onPress}>
      {typeof label === 'string' ? (
        <Text className="text-text-primary text-base font-semibold">{label}</Text>
      ) : (
        label
      )}

      <View
        className={cn('border-foreground-hover h-5 w-5 rounded-full border-2', {
          'bg-primary-light': isActive,
        })}
      />
    </TouchableOpacity>
  );
};

type SelectProps = {
  value: OptionValue;
  onChange: (value: OptionValue) => void;
  options: SelectOption[];
  label?: string;
  error?: boolean;
  helperText?: string;
};

export const CustomSelect = forwardRef<View | null, SelectProps>(
  ({ value, onChange, options, label = 'Select', error, helperText }, ref) => {
    const { colorScheme } = useColorScheme();

    const rotateAnim = useRef(new Animated.Value(0)).current;

    const renderItem = useCallback(
      (props: SelectItemProps) => {
        return (
          <SelectItem
            {...props}
            onPress={() => {
              onChange(props.value);
              props.onPress();
            }}
          />
        );
      },
      [onChange]
    );

    useEffect(() => {
      console.log('effect', value);
    }, [value]);

    const rotateInterpolate = rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });

    return (
      <SelectBottomSheet
        triggerElement={(open) => (
          <View
            ref={ref}
            className={cn(
              'bg-foreground-disabled min-h-12 w-full flex-row items-center justify-between gap-3 rounded-xl border border-transparent px-3 py-3.5',
              {
                'border-success-dark': open,
              }
            )}>
            <Text
              className={cn('text-text-secondary text-sm', {
                'text-text-primary': value !== undefined,
              })}>
              {value ?? label}
            </Text>

            <View className="flex-row items-center gap-3">
              <TouchableOpacity
                className={cn('opacity-1', {
                  'opacity-20': value === undefined,
                })}
                onPress={() => {
                  if (value !== undefined) {
                    onChange(undefined);
                  }
                }}>
                <X color={colorScheme === 'light' ? '#03071280' : '#FFFFFF'} size={16} />
              </TouchableOpacity>
              <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
                <ArrowDownIcon
                  {...(colorScheme === 'dark' && {
                    color: '#FFFFFF',
                  })}
                />
              </Animated.View>
            </View>
          </View>
        )}
        onChange={(open) => {
          Animated.timing(rotateAnim, {
            toValue: open ? 1 : 0,
            duration: 200,
            useNativeDriver: true,
          }).start();
        }}
        title={label}>
        {(onClose) => (
          <BottomSheetFlatList
            data={options}
            keyExtractor={(item, index) => `${item.value}-${index}`}
            ItemSeparatorComponent={() => <View />}
            renderItem={({ item }) =>
              renderItem({ ...item, isActive: item.value === value, onPress: onClose })
            }
          />
        )}
      </SelectBottomSheet>
    );
  }
);
