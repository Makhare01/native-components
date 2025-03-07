import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { useBoolean } from 'lib/hooks';
import { X } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { ReactNode, useCallback, useMemo, useRef } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Portal } from 'react-native-portalize';
import { cn } from 'utils';

type Props = {
  triggerElement: (open: boolean) => ReactNode;
  title: string;
  children: (onClose: () => void) => ReactNode;
  onChange?: (open: boolean) => void;
  disabled?: boolean;
};

export const SelectBottomSheet = ({
  triggerElement,
  title,
  children,
  onChange,
  disabled,
}: Props) => {
  const isOpen = useBoolean(false);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['40%'], []);

  const { colorScheme } = useColorScheme();

  const handleClose = useCallback(() => {
    bottomSheetRef.current?.close();

    // Hide GestureHandlerRootView after 0.5s to see closing animation
    setTimeout(() => {
      isOpen.setFalse();
    }, 500);
    onChange?.(false);
  }, [isOpen, bottomSheetRef.current]);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        onPress={handleClose}
        style={[{ zIndex: 1 }, props.style]}
      />
    ),
    []
  );

  return (
    <>
      <Pressable
        onPress={() => {
          if (isOpen.isFalse && !disabled) {
            isOpen.setTrue();
            bottomSheetRef.current?.snapToIndex(0);
            onChange?.(true);
          }
        }}>
        {triggerElement(isOpen.isTrue)}
      </Pressable>
      <Portal>
        <GestureHandlerRootView
          className={cn('flex-1', {
            hidden: isOpen.isFalse,
          })}>
          <BottomSheet
            ref={bottomSheetRef}
            containerStyle={{
              zIndex: 10,
            }}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
            enableDynamicSizing={false}
            enableHandlePanningGesture={false}
            enableContentPanningGesture={false}
            handleComponent={null}>
            <BottomSheetView className="flex-1 rounded-2xl bg-foreground-default">
              <View className="flex-row items-center justify-between border-b border-foreground-disabled p-5">
                <Text className="text-xl font-bold text-text-primary">{title}</Text>

                <TouchableOpacity
                  className="h-10 w-10 items-center justify-center rounded-full bg-foreground-disabled"
                  onPress={handleClose}>
                  <X color={colorScheme === 'light' ? '#030712' : '#FFFFFF'} size={14} />
                </TouchableOpacity>
              </View>
              <View className="flex-1 px-5 pb-9">{children(handleClose)}</View>
            </BottomSheetView>
          </BottomSheet>
        </GestureHandlerRootView>
      </Portal>
    </>
  );
};
