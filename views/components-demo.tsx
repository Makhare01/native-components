import { Header } from 'components/header';
import { CustomCheckbox } from 'components/ui/checkbox';
import { CustomSelect } from 'components/ui/select';
import { programmingLanguagesOptions } from 'lib/data';
import { ReactNode, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

const SectionWrapper = ({ children, title }: { children: ReactNode; title: string }) => (
  <View>
    <View className="border-b border-foreground-disabled pb-3">
      <Text className="text-xl font-bold text-text-primary">{title}</Text>
    </View>
    <View className="mt-5 gap-5">{children}</View>
  </View>
);

const SectionItem = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <View className="gap-2">
      <Text className="text-md font-medium text-text-primary">{title}</Text>
      {children}
    </View>
  );
};

export const ComponentsDemo = () => {
  const [value, setValue] = useState('');

  return (
    <View className="flex-1 gap-[28px] pt-[61px]">
      <Header />

      <ScrollView className="gap-5">
        <SectionWrapper title="Selects">
          <SectionItem title="Default">
            <CustomSelect
              value={value}
              label="Language"
              onChange={(value) => setValue(value)}
              helperText="Select programming language"
              options={programmingLanguagesOptions}
            />
          </SectionItem>

          <SectionItem title="Error">
            <CustomSelect
              value={value}
              label="Language"
              error
              onChange={(value) => setValue(value)}
              helperText="Please select item"
              options={programmingLanguagesOptions}
            />
          </SectionItem>

          <SectionItem title="Disabled">
            <CustomSelect
              value={value}
              label="Language"
              disabled
              onChange={(value) => setValue(value)}
              helperText="Please select item"
              options={programmingLanguagesOptions}
            />
          </SectionItem>
        </SectionWrapper>

        <View className="mt-12">
          <SectionWrapper title="Checkboxes">
            <SectionItem title="Primary">
              <CustomCheckbox label="Label" description="Description" checked />
            </SectionItem>

            <SectionItem title="Secondary">
              <CustomCheckbox label="Label" description="Description" color="secondary" checked />
            </SectionItem>

            <SectionItem title="Error">
              <CustomCheckbox label="Label" description="Description" color="error" checked />
            </SectionItem>

            <SectionItem title="Success">
              <CustomCheckbox label="Label" description="Description" color="success" checked />
            </SectionItem>

            <SectionItem title="Info">
              <CustomCheckbox label="Label" description="Description" color="info" checked />
            </SectionItem>

            <SectionItem title="Required">
              <CustomCheckbox label="Label" description="Description" checked required />
            </SectionItem>

            <SectionItem title="Disabled">
              <CustomCheckbox label="Label" description="Description" disabled />
            </SectionItem>

            <SectionItem title="Parent">
              <CustomCheckbox label="Label" description="Description" isParent checked />
            </SectionItem>

            <SectionItem title="Label right">
              <CustomCheckbox label="Label" description="Description" />
            </SectionItem>
            <SectionItem title="Label top">
              <CustomCheckbox label="Label" description="Description" labelPlacement="top" />
            </SectionItem>
            <SectionItem title="Label bottom">
              <CustomCheckbox label="Label" description="Description" labelPlacement="bottom" />
            </SectionItem>

            <SectionItem title="Label left">
              <CustomCheckbox label="Label" description="Description" labelPlacement="left" />
            </SectionItem>
          </SectionWrapper>
        </View>
      </ScrollView>
    </View>
  );
};
