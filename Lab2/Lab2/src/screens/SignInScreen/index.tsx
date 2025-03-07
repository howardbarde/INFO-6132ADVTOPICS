import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import styles from "./styles";

type Props = StackScreenProps<RootStackParamList, "SignIn">;

export default function SignInScreen({ navigation }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      navigation.navigate("Dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/loginPic3.png")} style={styles.logo} />

      <TextInput 
        style={styles.input} 
        placeholder="Username" 
        autoCapitalize="none"
        onChangeText={setUsername} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        autoCapitalize="none"
        onChangeText={setPassword} 
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
