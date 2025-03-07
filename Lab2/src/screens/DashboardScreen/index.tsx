import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { TransactionContext } from "../../context/TransactionContext";
import styles from "./styles";

type Props = StackScreenProps<RootStackParamList, "Dashboard">;

export default function DashboardScreen({ navigation }: Props) {
  const context = useContext(TransactionContext);

  if (!context) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: Context not found</Text>
      </View>
    );
  }

  const { transactions } = context;

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "SignIn" }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <Text style={styles.title}>Dashboard</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {transactions.length === 0 ? (
        <Text style={styles.noTransactions}>No transactions found.</Text>
      ) : (
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.transactionItem}
              onPress={() => navigation.navigate("TransactionDetail", { transaction: item })}
            >
              <Text style={styles.transactionText}>{item.description}</Text>
              <Text style={styles.transactionAmount}>${item.amount.toFixed(2)}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddTransaction")}
      >
        <Text style={styles.addButtonText}>+ Add Transaction</Text>
      </TouchableOpacity>
    </View>
  );
}
