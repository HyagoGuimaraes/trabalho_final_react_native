import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/Home";
import { TabList } from "../@types/navigation";

const Tab = createBottomTabNavigator<TabList>();

export const TabsRouters = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Tab.Screen name="TabDieta" component={Home} />
      <Tab.Screen name="TabHome" component={Home} />
      <Tab.Screen name="TabPost" component={Home} />
      <Tab.Screen name="TabProfile" component={Home} />
    </Tab.Navigator>
  );
};
