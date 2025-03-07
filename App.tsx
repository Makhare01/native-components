import { StatusBar } from 'expo-status-bar';
import { Providers } from 'providers';
import { ComponentsDemo } from 'views/components-demo';

import './global.css';

export default function App() {
  return (
    <Providers>
      <ComponentsDemo />

      <StatusBar style="auto" />
    </Providers>
  );
}
