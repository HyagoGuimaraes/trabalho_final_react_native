import Icons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { TabList } from "../@types/navigation";
import { DietPage } from "../pages/Diet";
import Home from "../pages/Home";
import Post from "../pages/Post";
import Profile from "../pages/Profile";
import { styles } from "./style";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator<TabList>();

export const TabsRouters = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: styles.bar,
      })}
    >
      <Tab.Screen
        name="TabHome"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.viewButton}>
              <Icons
                name="home-outline"
                size={25}
                color={focused ? "#000" : "#fff"}
              />
              <Text
                style={[
                  styles.tabLabel,
                  { color: focused ? "#000" : "#fff" },
                ]}
              >
                Inicio
              </Text>
            </View>
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="TabDieta"
        component={DietPage}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.viewButton}>
              <FontAwesome6 name="apple-whole" size={24}  color={focused ? "#000" : "#fff"} />
              <Text
                style={[
                  styles.tabLabel,
                  { color: focused ? "#000" : "#fff" },
                ]}
              >
                Diet
              </Text>
            </View>
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="TabPost"
        component={Post}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.viewButton}>
              <MaterialIcons name="post-add" size={30}  color={focused ? "#000" : "#fff"} />
              <Text
                style={[
                  styles.tabLabel,
                  { color: focused ? "#000" : "#fff" },
                ]}
              >
                Post
              </Text>
            </View>
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="TabProfile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.viewButton}>
              <MaterialCommunityIcons name="account" size={40}  color={focused ? "#000" : "#fff"} />
              <Text
                style={[
                  styles.tabLabel,
                  { color: focused ? "#000" : "#fff" },
                ]}
              >
                Conta
              </Text>
            </View>
          ),
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
};
