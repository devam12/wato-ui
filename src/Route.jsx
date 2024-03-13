import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RouteNames } from "./common/constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Started from "./screens/Started";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

const AppStack = createNativeStackNavigator();

const Route = () => {
  let initialRoute = RouteNames.GETTING_STARTED_SCREEN;

  console.log("Route 1 ");

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AppStack.Navigator
          initialRouteName={initialRoute}
          screenOptions={{
            headerShown: false,
            // animation: "slide_from_right",
            // presentation: "transparent",
          }}
        >
          <AppStack.Screen
            name={RouteNames.GETTING_STARTED_SCREEN}
            component={Started}
          />

          <AppStack.Screen name={RouteNames.SIGNIN_SCREEN} component={SignIn} />

          <AppStack.Screen name={RouteNames.SIGNUP_SCREEN} component={SignUp} />
        </AppStack.Navigator>
      </SafeAreaProvider>
    </View>
  );
};

export default Route;

const styles = StyleSheet.create({});
