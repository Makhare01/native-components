import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { ArrowDownIcon } from 'assets/icons';
import { useColorScheme } from 'nativewind';
import { forwardRef, ReactNode, useCallback, useRef } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { cn } from 'utils';

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
      className="flex-row items-center justify-between border-b border-foreground-disabled py-5"
      onPress={onPress}>
      {typeof label === 'string' ? (
        <Text className="text-base font-semibold text-text-primary">{label}</Text>
      ) : (
        label
      )}

      <View
        className={cn('h-5 w-5 rounded-full border-2 border-foreground-hover', {
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
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
};

export const CustomSelect = forwardRef<View | null, SelectProps>(
  ({ value, onChange, options, label = 'Select', disabled, error, helperText }, ref) => {
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

    const rotateInterpolate = rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });

    return (
      <SelectBottomSheet
        triggerElement={(open) => (
          <View>
            <View // Add this view for ring effect
              className={cn('rounded-xl border border-transparent', {
                'border-primary-op-24': open,
              })}>
              <View
                ref={ref}
                className={cn(
                  'h-[48px] max-h-[48px] w-full flex-row items-center justify-between gap-3 rounded-xl border border-transparent bg-foreground-disabled px-3 py-1.5',
                  {
                    'border-primary-base': open,
                    'bg-error-op-8': error,
                  }
                )}>
                <View>
                  <Text
                    className={cn('text-sm text-text-secondary', {
                      'text-text-disabled': disabled,
                      'text-xs': !!value,
                    })}>
                    {label}
                  </Text>
                  {!!value && (
                    <Text
                      className={cn('text-sm text-text-primary', {
                        'text-text-disabled': disabled,
                      })}>
                      {value}
                    </Text>
                  )}
                </View>

                <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
                  <ArrowDownIcon
                    color={
                      disabled ? '#0307123D' : colorScheme === 'dark' ? '#FFFFFF' : '#03071280'
                    }
                  />
                </Animated.View>
              </View>
            </View>

            {helperText && (
              <Text
                className={cn('ml-0.5 mt-1.5 text-xs text-text-secondary', {
                  'text-error-dark': error,
                  'text-text-disabled': disabled,
                })}>
                {helperText}
              </Text>
            )}
          </View>
        )}
        onChange={(open) => {
          Animated.timing(rotateAnim, {
            toValue: open ? 1 : 0,
            duration: 200,
            useNativeDriver: true,
          }).start();
        }}
        title={label}
        disabled={disabled}>
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
