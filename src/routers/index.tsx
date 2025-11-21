import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackRouters } from './stack';
const Stack = createStackNavigator();

export const Routers = () => {

  return (
    <NavigationContainer>
      <StackRouters/>
    </NavigationContainer>
  )
}