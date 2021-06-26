import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Logup from './src/screens/logup';
import Login from './src/screens/login';
import Profile from './src/screens/userProfile/profile';
import EditProfile from './src/screens/userProfile/editProfile';
import * as linking from 'expo-linking'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import OrderConfirmEmail from './src/screens/orderConfirmEmail';
import ForgotPassword from './src/screens/forgotPassword';
import NewPassword from './src/screens/newPassword';
import { isSignedIn } from "./src/services/security";


export default function App() {

  const Stack = createStackNavigator();

  const [isSigned, setIsSigned] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      setIsSigned(await isSignedIn());

      setIsLoaded(true);
    };

    load();
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isSigned ? "Profile" : "Login"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Logup" component={Logup} />
        <Stack.Screen name="OrderConfirmEmail" component={OrderConfirmEmail} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}