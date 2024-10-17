import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f4f4f4',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 20,
      textAlign: 'center',
    },
    card: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 10,
      marginBottom: 15,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
      elevation: 4,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
    },
    username: {
      fontSize: 16,
      color: '#666',
      marginBottom: 5,
    },
    email: {
      fontSize: 14,
      color: '#999',
    },
});