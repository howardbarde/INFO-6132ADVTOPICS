import { StyleSheet } from "react-native";

export default StyleSheet.create({
  scrollContainer: { flexGrow: 1, justifyContent: "center" },
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5", justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center", color: "#333" },
  input: { padding: 15, borderWidth: 1, borderRadius: 10, marginBottom: 10, backgroundColor: "#fff", borderColor: "#ddd" },
  inputError: { borderColor: "red" },
  errorText: { color: "red", marginBottom: 10 },
  picker: { backgroundColor: "#fff", borderRadius: 10, marginBottom: 10 },
  button: { backgroundColor: "#007bff", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 10 },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
