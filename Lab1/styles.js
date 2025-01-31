import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: '#fff',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 8,
    },
    taskCard: {
      backgroundColor: '#f9f9f9',
      padding: 15,
      marginBottom: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    taskTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    statusContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    deleteText: {
      color: 'red',
      marginTop: 10,
      fontWeight: 'bold',
    },
  });

  export default styles;