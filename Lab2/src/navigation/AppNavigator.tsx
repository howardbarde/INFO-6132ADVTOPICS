import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SignInScreen from "../screens/SignInScreen";
import DashboardScreen from "../screens/DashboardScreen";
import AddTransactionScreen from "../screens/AddTransactionScreen";
import TransactionDetailScreen from "../screens/TransactionDetailScreen/TransactionDetailScreen";
import { Transaction } from "../types";

export type RootStackParamList = {
  SignIn: undefined;
  Dashboard: undefined;
  AddTransaction: undefined;
  TransactionDetail: { transaction: Transaction };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{ headerLeft: () => null }}
        />
        <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
        <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
