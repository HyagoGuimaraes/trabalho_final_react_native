import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProviders } from '../auth/useAuth';
import { StackRouters } from './stack';

const Stack = createStackNavigator();

export const Routers = () => {

  return (
    <NavigationContainer>
      <AuthProviders>
        <StackRouters />
      </AuthProviders>
    </NavigationContainer>
  )
}