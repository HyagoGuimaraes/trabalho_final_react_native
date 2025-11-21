
import { StatusBar } from 'react-native';
import { Routers } from './src/routers';
import { Home } from './src/pages/Home';
import CardContar from './src/components/CardContar';

export default function App() {
  return (
   <>
       {/* <StatusBar
        barStyle="light-content"
        backgroundColor="black"
        translucent={false}
      />
      <Routers /> */}
      <Home />
    </>
  );
}
