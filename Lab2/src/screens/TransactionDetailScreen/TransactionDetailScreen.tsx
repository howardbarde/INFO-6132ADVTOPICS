import React from "react";
import { View, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import styles from "./styles";

type Props = StackScreenProps<RootStackParamList, "TransactionDetail">;

export default function TransactionDetailScreen({ route }: Props) {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Details</Text>

      <View style={styles.card}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>{transaction.date}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Amount:</Text>
          <Text style={[styles.value, styles.amount]}>${transaction.amount.toFixed(2)}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.value}>{transaction.description}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.value}>{transaction.location}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Type:</Text>
          <Text style={[styles.value, transaction.type === "Credit" ? styles.credit : styles.debit]}>
            {transaction.type}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Category:</Text>
          <Text style={styles.value}>{transaction.category}</Text>
        </View>
      </View>
    </View>
  );
}
