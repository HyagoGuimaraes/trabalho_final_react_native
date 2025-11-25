import { StatusBar } from 'react-native';
import { Routers } from './src/routers';
import { DietProvider } from './src/context/DietContext';

export default function App() {
  return (
    <DietProvider>

      <StatusBar
        barStyle="light-content"
        backgroundColor="black"
        translucent={false}
      />
      <Routers />

    </DietProvider>
  );
}