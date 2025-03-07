import React, { useState, useContext } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, Platform, ScrollView, KeyboardAvoidingView 
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { TransactionContext } from "../../context/TransactionContext";
import styles from "./styles";

type Props = StackScreenProps<RootStackParamList, "AddTransaction">;

export default function AddTransactionScreen({ navigation }: Props) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [transactionType, setTransactionType] = useState<"Credit" | "Debit" | "Refund">("Credit");
  const [category, setCategory] = useState<"Shopping" | "Travel" | "Utility">("Shopping");

  const transactionContext = useContext(TransactionContext);
  if (!transactionContext) {
    return <Text>Error: Transaction Context not found</Text>;
  }
  const { addTransaction } = transactionContext;

  const validateAmount = (value: string) => {
    if (!value) {
      setAmountError("Amount is required");
      return false;
    }
    const parsedAmount = parseFloat(value);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setAmountError("Amount must be a positive number");
      return false;
    }
    setAmountError("");
    return true;
  };

  const handleAddTransaction = () => {
    if (!description || !amount || !location) {
      alert("Please fill in all fields");
      return;
    }

    if (!validateAmount(amount)) return;

    addTransaction({
      id: Math.random(),
      date: date.toISOString().split("T")[0],
      amount: parseFloat(amount),
      description,
      location,
      type: transactionType,
      category,
    });

    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Add Transaction</Text>

          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
            <Text>{date.toDateString()}</Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) setDate(selectedDate);
              }}
            />
          )}

          <TextInput style={styles.input} placeholder="Description" onChangeText={setDescription} />

          <TextInput
            style={[styles.input, amountError ? styles.inputError : null]}
            placeholder="Amount"
            keyboardType="numeric"
            onChangeText={(text) => {
              setAmount(text);
              validateAmount(text);
            }}
          />
          {amountError ? <Text style={styles.errorText}>{amountError}</Text> : null}

          <TextInput style={styles.input} placeholder="Location" onChangeText={setLocation} />

          <Picker
            selectedValue={transactionType}
            onValueChange={(itemValue) => setTransactionType(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Credit" value="Credit" />
            <Picker.Item label="Debit" value="Debit" />
            <Picker.Item label="Refund" value="Refund" />
          </Picker>

          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Shopping" value="Shopping" />
            <Picker.Item label="Travel" value="Travel" />
            <Picker.Item label="Utility" value="Utility" />
          </Picker>

          <TouchableOpacity style={styles.button} onPress={handleAddTransaction}>
            <Text style={styles.buttonText}>Add Transaction</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
