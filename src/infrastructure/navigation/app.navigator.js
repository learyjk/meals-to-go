import React from "react";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Mappy = () => {
  return <Text>Mappy</Text>;
};

const Settings = () => {
  return <Text>Settings</Text>;
};
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={Mappy} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
