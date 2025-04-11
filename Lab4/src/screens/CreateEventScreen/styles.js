import { StyleSheet } from "react-native";

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5f5f5',
      },
      container: {
        padding: 20,
        flex: 1,
        justifyContent: 'flex-start',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 25,
        color: '#333',
        alignSelf: 'center',
      },
      input: {
        marginBottom: 15,
      },
      dateInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 14,
        marginBottom: 15,
        backgroundColor: '#fff',
        elevation: 2,
      },
      dateText: {
        fontSize: 16,
        color: '#555',
      },
      button: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        elevation: 3,
      },
      logoutBtn: {
        marginRight: 15,
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: '#ff5c5c',
        borderRadius: 6,
      },
      logoutText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
      },
});
