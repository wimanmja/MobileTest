import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

export default function PhotoScreen({ route }) {
  const { userName, albumId } = route.params;
  const [photos, setPhotos] = useState([]);
  const numColumns = 3;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((photosData) => setPhotos(photosData))
      .catch((error) => console.error(error));
  }, [albumId]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Album {albumId} of {userName}</Text>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.photoItem}>
            <Image source={{ uri: item.thumbnailUrl }} style={styles.thumbnail} />
          </View>
        )}
        numColumns={numColumns}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f9f9f9',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    photoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 8,
      elevation: 2,
    },
    thumbnail: {
      width: Dimensions.get('window').width / 4.1,
      height: 60,
      borderRadius: 9,
    },
    photoTitle: {
      fontSize: 16,
      color: '#333',
    },
});