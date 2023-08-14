import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';

const CarouselC = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(null);

  const API_URL = 'https://api.themoviedb.org/3/trending/all/week?api_key=e73f71436cd86507240a50ed4722dcaf&language=en-US';
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setMovies(response.data.results);
        setCurrentMovieIndex(Math.floor(Math.random() * response.data.results.length));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setCurrentMovieIndex(randomIndex);
    }, 6000);

    return () => clearInterval(interval);
  }, [movies]);

  if (currentMovieIndex === null) return <Text>Loading...</Text>;

  const movie = movies[currentMovieIndex];

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
        cache={FastImage.cacheControl.cacheOnly}
      />
       <View style={styles.bannerButtons}>
            <TouchableOpacity style={styles.playButton}>
                <Text style={styles.playText}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.myButton}>
                <Text style={styles.myText}>My List</Text>
            </TouchableOpacity>
        </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 350,
    height: 500,
    borderRadius: 12,
    overflow: 'hidden', 
    alignItems: 'center',
    justifyContent: 'flex-end', 
    marginBottom:15,
  },
  image: {
    width: 350,
    height: 500,
    borderRadius:12,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  bannerButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    position: 'absolute',
    bottom: 10,
},
playButton: {
  backgroundColor: 'rgba(220, 220, 220, 0.8)',
  paddingVertical: 15,
  paddingHorizontal: 25,
  marginHorizontal: 5,
  borderRadius: 5,
},
playText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#000',
},
myButton: {
    backgroundColor: 'rgba(120, 120, 120, 0.7)',
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginHorizontal: 5,
    borderRadius: 5,
},
myText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
},
});

export default CarouselC;
