import { StatusBar } from 'react-native';
import { Routers } from './src/routers';
import { DietProvider } from './src/context/DietContext';

export default function App() {
  return (
    <DietProvider>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={false}
      />
      <Routers />

    </DietProvider>
  );
}