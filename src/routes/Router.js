import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InputCustomer from "../screens/InputCustomer";
import UpdateCustomer from "../screens/UpdateCustomer";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="inputcustomer" component={InputCustomer} />
        <Stack.Screen name="updatecustomer" component={UpdateCustomer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
