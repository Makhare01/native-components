import { CustomCheckbox } from 'components/checkbox';
import { ContainerView } from 'components/container-view';
import { Header } from 'components/header';
import { CustomSelect } from 'components/select';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Host } from 'react-native-portalize';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'utils/theme-provider';

import { useEffect, useState } from 'react';
import './global.css';

export default function App() {
  const [value, setValue] = useState<string | undefined>();

  useEffect(() => {
    console.log('OUT', value);
  }, [value]);

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Host>
          <ContainerView>
            <Header />

            <View className="mt-5 gap-5">
              <CustomCheckbox label="Label" description="Description" color="secondary" required />

              <CustomSelect
                value={value}
                onChange={(value) => setValue(value)}
                options={[
                  {
                    label: 'One',
                    value: '1',
                  },
                  {
                    label: 'Two',
                    value: '2',
                  },
                  {
                    label: 'Three',
                    value: '3',
                  },
                  {
                    label: 'One',
                    value: '4',
                  },
                  {
                    label: 'Two',
                    value: '5',
                  },
                  {
                    label: 'Three',
                    value: '6',
                  },
                  {
                    label: 'One',
                    value: '7',
                  },
                  {
                    label: 'Two',
                    value: '8',
                  },
                  {
                    label: 'Three',
                    value: '9',
                  },
                  {
                    label: 'One',
                    value: '10',
                  },
                  {
                    label: 'Two',
                    value: '11',
                  },
                  {
                    label: 'Three',
                    value: '12',
                  },
                  {
                    label: 'One',
                    value: '13',
                  },
                  {
                    label: 'Two',
                    value: '14',
                  },
                  {
                    label: 'Three',
                    value: '15',
                  },
                ]}
              />
            </View>

            <StatusBar style="auto" />
          </ContainerView>
        </Host>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
