import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import Navbar from './Navbar';
import FastImage from 'react-native-fast-image';

const MoviesC = ({navigation}) => {
  const [movies, setMovies] = useState([]);

  const API_URL = 'https://api.themoviedb.org/3/discover/tv?api_key=e73f71436cd86507240a50ed4722dcaf&with_networks=213';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  
  const handleClick = (movie) => {
    navigation.navigate('MovieDetails', { movie });
  };

  const renderItem = ({ item }) => (
     <TouchableOpacity onPress={() => handleClick(item)}>
      <View style={styles.card}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
          cache={FastImage.cacheControl.cacheOnly}
        />
      </View>
    </TouchableOpacity>
  );

  const cutMovies = movies.slice(0,18);

  return (
    <View style={{ flex: 1 }}>
      <Navbar navigation={navigation} />
      <FlatList
        data={cutMovies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}  // 3 cards in a row
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    backgroundColor: '#000',
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
    width:120,
    height:180,
  },
  image: {
    borderRadius: 8,
    width: '100%',
    aspectRatio: 2/3,
    resizeMode: 'cover',
  },
});

export default MoviesC;
