import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },

  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 20, 
    textAlign: "center", 
    color: "#007bff" 
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  detailRow: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  label: { fontSize: 16, fontWeight: "bold", color: "#555" },
  value: { fontSize: 16, color: "#333" },

  amount: { fontWeight: "bold", color: "#28a745" },
  credit: { color: "#28a745", fontWeight: "bold" },
  debit: { color: "#dc3545", fontWeight: "bold" },
});
