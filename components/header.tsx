import { useColorScheme } from 'nativewind';
import { Switch, Text, View } from 'react-native';

export const Header = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="mt- mt-[61px] flex-row items-center justify-between">
      <Text className="text-text-primary text-[32px] font-semibold">Profile Info</Text>

      <View className="flex-row items-center gap-3">
        <Text className="text-text-primary text-lg font-medium">Dark</Text>
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      </View>
    </View>
  );
};
