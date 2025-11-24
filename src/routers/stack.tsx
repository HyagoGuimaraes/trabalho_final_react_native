import { createStackNavigator } from '@react-navigation/stack';
import { StackList } from '../@types/navigation';
import { Login } from "../pages/Login";
import { Register } from '../pages/Register';
import { TabsRouters } from './bottomTabs';

const Stack = createStackNavigator<StackList>();

export const StackRouters = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StackLogin" component={Login} />
      <Stack.Screen name="StackHome" component={TabsRouters} />
      <Stack.Screen name="StackRegister" component={Register} />
    </Stack.Navigator>
  )
}