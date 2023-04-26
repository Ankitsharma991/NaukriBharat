import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupPage from "./components/pages/signuppage/signuppage";
import LoginPage from "./components/pages/loginpage/loginpage";
import HomeScreen from "./components/pages/screen/homescreen/homescreen";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignupPage"
          component={SignupPage}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "NokriBharat" }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ title: "LoginPage" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
