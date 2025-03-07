import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 20, 
    backgroundColor: "#f5f5f5" 
  },
  logo: { 
    width: 150, 
    height: 150, 
    marginBottom: 20 
  },
  input: { 
    width: "100%", 
    padding: 15, 
    borderWidth: 1, 
    borderRadius: 10, 
    marginBottom: 10, 
    backgroundColor: "#fff", 
    borderColor: "#ddd" 
  },
  button: { 
    backgroundColor: "#007bff", 
    padding: 15, 
    borderRadius: 10, 
    width: "100%", 
    alignItems: "center", 
    marginTop: 10 
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 18, 
    fontWeight: "bold" 
  },
});
