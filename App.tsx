import { StatusBar } from 'react-native';
import { Routers } from './src/routers';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      
        <StatusBar
          barStyle="light-content"
          backgroundColor="black"
          translucent={false}
        />
        <Routers />
      
    </AuthProvider>
  );
}