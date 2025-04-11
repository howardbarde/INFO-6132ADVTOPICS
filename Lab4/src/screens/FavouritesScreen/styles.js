import { StyleSheet } from "react-native";

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f5f5f5',
      },
      container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
        backgroundColor: '#f5f5f5',
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
      eventListContainer: {
        paddingBottom: 50,
      },
      emptyListContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      emptyText: {
        textAlign: 'center',
        color: '#999',
        fontSize: 16,
        marginTop: 20,
      },
});
