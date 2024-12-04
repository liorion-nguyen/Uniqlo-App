import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeStackParams } from "./config";
import Home from "../screens/main/Home/Home";
import ProductDetail from "../screens/main/Home/ProductDetail";

const Stack = createStackNavigator<HomeStackParams>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
