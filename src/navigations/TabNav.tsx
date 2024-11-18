import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notification from "../screens/main/Setting/Notification";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "native-base";
import HomeStack from "./HomeStack";
import { BottomTabsParams } from "./config";
import Setting from "../screens/main/Setting/Setting";
  import * as Notifications from "expo-notifications";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Tab = createBottomTabNavigator<BottomTabsParams>();

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

const TabNav = () => {
  const { colors } = useTheme();

  const dispatch = useDispatch();
  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Bạn có thông báo mới",
        body: "Hãy vào xem",
        data: {
          username: "tuanna",
        },
      },
      trigger: {
        seconds: 0.2,
      },
    });
  }

  useEffect(() => {
    const subcribe1 = Notifications.addNotificationReceivedListener((noti) => {
      // Do something when recieved
    });

    const subcribe2 = Notifications.addNotificationResponseReceivedListener((response: any) => {
      // Do something when interact
    });

    return () => {
      subcribe1.remove();
      subcribe2.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: colors.coolGray[700] },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: colors.muted[400],
        headerTitleStyle: { fontSize: 20 },
        headerStyle: { backgroundColor: colors.coolGray[700] },
        headerTintColor: "white",
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: colors.coolGray[700] },
          headerTintColor: "white",
          title: "Thông báo",
          headerTitleStyle: { fontSize: 20 },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: true,
          title: "Cài đặt",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({});
