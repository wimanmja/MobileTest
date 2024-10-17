import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './AlbumScreenStyle';

export default function AlbumScreen({ route, navigation }) {
  const { userId, userName } = route.params;
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then((response) => response.json())
      .then((albumsData) => setAlbums(albumsData))
      .catch((error) => console.error(error));
  }, [userId]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Albums from {userName}</Text>
      <FlatList
        data={albums}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.albumItem} 
            onPress={() => navigation.navigate('Photo', { albumId: item.id, userName })}
          >
            <Text style={styles.albumTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}