import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f4f8",
  },

  toolbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "#007bff",
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff4d4d",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  logoutText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },

  noTransactions: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "gray",
  },

  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  transactionText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  transactionDate: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  credit: {
    color: "#28a745",
  },
  debit: {
    color: "#dc3545",
  },

  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007bff",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  errorText: {
    textAlign: "center",
    color: "red",
    fontSize: 18,
    marginTop: 20,
  },
});
