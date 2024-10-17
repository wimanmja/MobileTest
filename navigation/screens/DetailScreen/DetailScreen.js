import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './DetailScreenStyle';

export default function DetailScreen({ route }) {
  const { user } = route.params;
  const [todos, setTodos] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`)
      .then((response) => response.json())
      .then((json) => setTodos(json))
      .catch((error) => console.error(error));
  }, [user.id]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user.name} Todos</Text>
      <Text style={styles.text}>Username: {user.username}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Text style={styles.text}>Phone: {user.phone}</Text>

      <Button
        title="View Albums"
        onPress={() => navigation.navigate('Album', { userId: user.id, userName: user.name })}
        color="#4CAF50"
      />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoId}>Todos Number: {item.id}</Text>
            <Text style={styles.todosTitle}>{item.title}</Text>
            <Text style={styles.todoStatus}>
              Status: {item.completed ? '✅ Completed' : '❌ Not Completed'}
            </Text>
          </View>
        )}
      />
    </View>
  );
}