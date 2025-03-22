import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f4f4f4',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        textAlign: 'center',
      },
      author: {
        fontSize: 20,
        color: '#777',
        marginBottom: 15,
        textAlign: 'center',
      },
      description: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 25,
        paddingHorizontal: 20,
      },
      borrowButton: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
      },
      disabledButton: {
        backgroundColor: '#ccc',
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
      },
});
