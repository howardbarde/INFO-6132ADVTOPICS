import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },

  toolbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#007bff",
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: { fontSize: 22, fontWeight: "bold", color: "#fff" },

  logoutButton: {
    backgroundColor: "#ff4d4d",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  logoutText: { color: "#fff", fontSize: 14, fontWeight: "bold" },

  noTransactions: { textAlign: "center", marginTop: 20, fontSize: 16, color: "gray" },

  transactionItem: {
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 3,
  },
  transactionText: { fontSize: 16, fontWeight: "500", color: "#333" },
  transactionAmount: { fontSize: 16, fontWeight: "bold", color: "#007bff" },

  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    elevation: 5,
  },
  addButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },

  errorText: { textAlign: "center", color: "red", fontSize: 18, marginTop: 20 },
});
