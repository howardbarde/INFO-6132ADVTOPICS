import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f4f7fc',
      },
      screenTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
      },
      noBooksText: {
        fontSize: 18,
        color: '#777',
        textAlign: 'center',
        marginTop: 30,
      },
      bookItem: {
        marginBottom: 15,
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
      },
      bookTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
      },
      bookAuthor: {
        fontSize: 16,
        color: '#555',
        marginBottom: 10,
      },
      returnButton: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        elevation: 3,
      },
      returnButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
      },
});
