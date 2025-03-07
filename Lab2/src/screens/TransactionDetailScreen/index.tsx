import React from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

type Props = StackScreenProps<RootStackParamList, "TransactionDetail">;

export default function TransactionDetailScreen({ route }: Props) {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Details</Text>

      <View style={styles.card}>
        <View style={styles.detailRow}>
          <MaterialIcons name="calendar-today" size={20} color="#007bff" />
          <Text style={styles.value}>{transaction.date}</Text>
        </View>

        <View style={styles.detailRow}>
          <MaterialIcons name="attach-money" size={20} color={transaction.type === "Credit" ? "#28a745" : "#dc3545"} />
          <Text style={[styles.value, styles.amount]}>${transaction.amount.toFixed(2)}</Text>
        </View>

        <View style={styles.detailRow}>
          <MaterialIcons name="description" size={20} color="#6c757d" />
          <Text style={styles.value}>{transaction.description}</Text>
        </View>

        <View style={styles.detailRow}>
          <MaterialIcons name="location-on" size={20} color="#ff9800" />
          <Text style={styles.value}>{transaction.location}</Text>
        </View>

        <View style={styles.detailRow}>
          <MaterialIcons name="category" size={20} color={transaction.type === "Credit" ? "#28a745" : "#dc3545"} />
          <Text style={[styles.value, transaction.type === "Credit" ? styles.credit : styles.debit]}>
            {transaction.type}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <MaterialIcons name="folder" size={20} color="#007bff" />
          <Text style={styles.value}>{transaction.category}</Text>
        </View>
      </View>
    </View>
  );
}
