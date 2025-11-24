import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabList } from "../@types/navigation";
import { DietPage } from "../pages/Diet";
import Home from "../pages/Home";

const Tab = createBottomTabNavigator<TabList>();

export const TabsRouters = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Tab.Screen name="TabHome" component={Home} />
      <Tab.Screen name="TabDieta" component={DietPage} />
      <Tab.Screen name="TabPost" component={Home} />
      <Tab.Screen name="TabProfile" component={Home} />
    </Tab.Navigator>
  );
};

