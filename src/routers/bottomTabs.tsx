import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabList } from "../@types/navigation";
import { DietPage } from "../pages/Diet";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Post from "../pages/Post";

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
      <Tab.Screen name="TabPost" component={Post} />
      <Tab.Screen name="TabProfile" component={Profile} />
    </Tab.Navigator>
  );
};