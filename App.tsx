import { ContainerView } from 'components/container-view';
import { Header } from 'components/header';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'utils/theme-provider';

import './global.css';

export default function App() {
  return (
    <ThemeProvider>
      <ContainerView>
        <Header />
        <StatusBar style="auto" />
      </ContainerView>
    </ThemeProvider>
  );
}
