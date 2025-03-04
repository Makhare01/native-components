import { SafeAreaView, View } from 'react-native';

export const ContainerView = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView className={styles.container}>
      <View className={styles.view}>{children}</View>
    </SafeAreaView>
  );
};

const styles = {
  container: 'bg-foreground_default flex flex-1',
  view: 'flex-1 p-5',
};
