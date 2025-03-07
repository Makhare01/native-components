import { ContainerView } from 'components/container-view';
import { ReactNode } from 'react';
import { Host } from 'react-native-portalize';
import { ThemeProvider } from 'utils/theme-provider';

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <Host>
        <ContainerView>{children}</ContainerView>
      </Host>
    </ThemeProvider>
  );
};
