import { StyleSheet } from "react-native";

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f4f8",
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },

  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderColor: "#ddd",
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },

  datePicker: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    marginBottom: 10,
  },
  dateText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },

  pickerContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  pickerLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 5,
  },
  picker: {
    backgroundColor: "#fff",
  },

  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
