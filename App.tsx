import { StatusBar } from 'react-native';
import { Routers } from './src/routers';

export default function App() {
  return (
   <>
       <StatusBar
        barStyle="light-content"
        backgroundColor="black"
        translucent={false}
      />
      <Routers />
    </>
  );
}


