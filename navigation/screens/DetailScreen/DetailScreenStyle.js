import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f9f9f9',
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333',
      textAlign: 'center',
    },
    text: {
      fontSize: 18,
      marginBottom: 5,
      color: '#555',
    },
    subtitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
      color: '#333',
    },
    todoItem: {
      padding: 15,
      marginVertical: 8,
      borderRadius: 8,
      backgroundColor: '#fff',
      elevation: 3,
      borderLeftWidth: 4,
      borderLeftColor: '#4CAF50',
    },
    todoId: {
      fontSize: 16,
      fontWeight: '600',
    },
    todosTitle: {
      fontSize: 18,
      fontWeight: '500',
      marginVertical: 5,
    },
    todoStatus: {
      fontSize: 14,
      color: '#888',
    },
});