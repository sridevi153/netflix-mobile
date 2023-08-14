import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';

const CardList = () => {
  const [movies, setMovies] = useState([]);

  const API_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=e73f71436cd86507240a50ed4722dcaf&language=en-US';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        const topTenMovies = response.data.results.slice(0, 10);
        setMovies(topTenMovies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
    cache={FastImage.cacheControl.cacheOnly} 
      />
      <View style={styles.overlay}>
        <Text style={styles.number}>{index + 1}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={(item) => String(item.id)}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
  },
  card: {
    width: 150,
    height:230,
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 2 / 3,  // Movie poster aspect ratio
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  number: {
    fontSize: 120,
    fontWeight: 'bold',
    color: 'rgba(220, 220, 220, 1)',
    textShadowColor: 'rgba(1, 1, 1, 0.75)',
    textShadowOffset: { width: 20, height: 3 },
    textShadowRadius: 10,
    position: 'absolute',
    top: 100,
    left:80,
  },
});

export default CardList;
