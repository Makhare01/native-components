import { useBoolean } from 'lib/hooks';
import { Check, Minus } from 'lucide-react-native';
import { forwardRef, useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { cn } from 'utils';

type Placements = 'top' | 'right' | 'bottom' | 'left';
type Colors = 'primary' | 'secondary' | 'error' | 'success' | 'info';

const colorsRecord: Record<Colors, string> = {
  primary: 'border-primary-dark bg-primary-dark',
  secondary: 'border-secondary-dark bg-secondary-dark',
  error: 'border-error-dark bg-error-dark',
  success: 'border-success-dark bg-success-dark',
  info: 'border-info-dark bg-info-dark',
};

type CheckboxProps = {
  label?: string;
  description?: string;
  checked?: boolean;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  isParent?: boolean;
  labelPlacement?: Placements;
  color?: Colors;
  onChange?: (checked: boolean) => void;
};

export const CustomCheckbox = forwardRef<View | null, CheckboxProps>(
  (
    {
      label,
      description,
      checked = false,
      required,
      disabled,
      error,
      isParent,
      labelPlacement = 'right',
      color = 'primary',
      onChange,
    },
    ref
  ) => {
    const isChecked = useBoolean(checked);
    const scale = useSharedValue(isChecked.isTrue ? 1 : 0);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
    }));

    const toggleCheckbox = () => {
      const newValue = !isChecked.isTrue;
      isChecked.toggle();
      scale.value = withSpring(newValue ? 1 : 0);
      onChange?.(newValue);
    };

    const Icon = useMemo(() => (isParent ? Minus : Check), [isParent]);

    const activeColor = useMemo(() => colorsRecord[color], [color]);

    return (
      <Pressable
        ref={ref}
        testID="checkbox-pressable"
        onPress={() => {
          if (!disabled) {
            toggleCheckbox();
          }
        }}
        className={cn('flex-row items-start gap-3 self-start', {
          'flex-col-reverse items-center': labelPlacement === 'top',
          'flex-col items-center': labelPlacement === 'bottom',
          'flex-row-reverse items-center': labelPlacement === 'left',
        })}>
        <View
          testID="checkbox-icon"
          className={cn(
            'border-foreground-hover flex h-5 w-5 items-center justify-center rounded-md border-2',
            isChecked.isTrue && activeColor,
            error && 'bg-error-op-8 border-transparent',
            {
              'bg-foreground-disabled': disabled,
              'opacity-50': error && disabled,
            }
          )}>
          <Animated.View style={animatedStyle}>
            <Icon size={14} color="white" />
          </Animated.View>
        </View>

        <View>
          {label && (
            <Text
              className={cn('text-text-primary text-sm font-semibold', {
                'text-text-disabled': disabled,
                'text-error-base': error,
                'opacity-50': error && disabled,
                'text-center': labelPlacement === 'top' || labelPlacement === 'bottom',
              })}>
              {label}
              {required && ' *'}
            </Text>
          )}

          {label && description && (
            <Text
              className={cn('text-text-secondary mt-0.5 text-xs', {
                'text-text-disabled': disabled,
                'text-center': labelPlacement === 'top' || labelPlacement === 'bottom',
              })}>
              {description}
            </Text>
          )}
        </View>
      </Pressable>
    );
  }
);
