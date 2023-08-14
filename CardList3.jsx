import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';

const CardList3 = () => {
  const [movies, setMovies] = useState([]);

  const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=e73f71436cd86507240a50ed4722dcaf&with_genres=27';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        const moviesData = response.data.results.slice(0, 10);
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
        cache={FastImage.cacheControl.cacheOnly}
      />
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
//   list: {
//     paddingHorizontal: 10,
//   },
  card: {
    width: 150,
    height:230,
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default CardList3;
