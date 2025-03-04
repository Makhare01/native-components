import { useColorScheme } from 'nativewind';
import { Button, Switch, Text, View } from 'react-native';

export const Header = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-row items-center justify-between">
      <Text className="text-text_primary text-[32px]">Profile Info</Text>

      <View className="flex-row items-center gap-3">
        <Text className="text-text_primary">Dark</Text>

        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      </View>
    </View>
  );
};
