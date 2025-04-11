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
        paddingBottom: 100,
      },
      emptyListContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      emptyWrapper: {
        alignItems: 'center',
        marginTop: 50,
      },
      emptyText: {
        textAlign: 'center',
        color: '#999',
        fontSize: 16,
        marginBottom: 16,
      },
      createBtn: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
      },
      createBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
      },
      fabContainer: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        alignItems: 'center',
      },
      fab: {
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        marginBottom: 16,
      },
      createFab: {
        backgroundColor: '#007bff',
      },
      favFab: {
        backgroundColor: '#007bff',
      },
      fabIcon: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
      },
});
