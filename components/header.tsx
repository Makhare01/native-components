import { useColorScheme } from 'nativewind';
import { Switch, Text, View } from 'react-native';

export const Header = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-row items-center justify-between">
      <Text className="text-[32px] font-semibold text-text-primary">Profile Info</Text>

      <View className="flex-row items-center gap-3">
        <Text className="text-lg font-medium text-text-primary">Dark</Text>
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      </View>
    </View>
  );
};
