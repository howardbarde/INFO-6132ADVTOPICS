import React from "react";
import { AuthProvider } from "./src/context/AuthContext";
import { TransactionProvider } from "./src/context/TransactionContext";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <AuthProvider>
      <TransactionProvider>
        <AppNavigator />
      </TransactionProvider>
    </AuthProvider>
  );
}
