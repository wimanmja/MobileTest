import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './ListScreenStyle';

export default function ListScreen({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detail', { user: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.username}>@{item.username}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}