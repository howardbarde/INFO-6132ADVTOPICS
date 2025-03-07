import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { TransactionContext } from "../../context/TransactionContext";
import { MaterialIcons } from "@expo/vector-icons"; // Import icon library
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
          <MaterialIcons name="logout" size={20} color="#fff" />
          <Text style={styles.logoutText}> Logout</Text>
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
              <View>
                <Text style={styles.transactionText}>{item.description}</Text>
                <Text style={styles.transactionDate}>{item.date}</Text>
              </View>
              <Text
                style={[
                  styles.transactionAmount,
                  item.type === "Credit" ? styles.credit : styles.debit,
                ]}
              >
                {item.type === "Credit" ? "+" : "-"}${item.amount.toFixed(2)}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("AddTransaction")}
      >
        <MaterialIcons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
