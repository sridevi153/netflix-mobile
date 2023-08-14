import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, Dimensions, Button, ImageBackground } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import movieTrailer from 'movie-trailer';
import Navbar from './Navbar';

const windowWidth = Dimensions.get('window').width;

const MovieDetails = ({ route, navigation }) => {
  const { movie } = route.params;
  const [playerUrl, setPlayerUrl] = useState('');
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    const fetchTrailerUrl = async () => {
      const movieName = movie?.title || movie?.name;
      try {
        const url = await movieTrailer(movieName || '');
        if (url) {
          const videoId = url.split('v=')[1];
          setPlayerUrl(videoId);
        } else {
          setPlayerUrl('');
        }
      } catch (error) {
        setPlayerUrl('');
      }
    };

    fetchTrailerUrl();
  }, [movie]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const handlePlayClick = () => {
    setShowPlayer(true);
  };

  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      {showPlayer ? (
        <YoutubePlayer
          height={300}
          videoId={playerUrl}
          play={true}
        />
      ) : (
        <View style={styles.content}>
          <Image 
            source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} 
            style={styles.image}
          />
          <Text style={styles.title}>{movie.title || movie.name}</Text>
          <Text style={styles.description}>{truncate(movie?.overview, 200)}</Text>
          <TouchableOpacity 
            style={styles.playButton} 
            onPress={handlePlayClick}>
            <Text style={styles.playText}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.downloadButton}>
            <Text style={styles.downloadText}>Download</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: 300,
    objectFit:'fill',
    padding:10,
  },
  title: {
    color:'white', 
    fontSize:20, 
    fontWeight: 'bold',
    padding:10,
  },
  description: {
    fontSize: 16,
    color: '#FFF',
    margin: 10,
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems:'center',
    marginHorizontal:10,
    marginVertical:7,
    justifyContent:'center',
  },
  playText: {
    color: '#000',
    textAlign:'center',
    fontSize:20,
    fontWeight:'700',
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(169, 169, 169, 0.3)',
    borderRadius: 5,
    alignItems:'center',
    marginHorizontal:10,
    marginVertical:7,
    justifyContent:'center',
  },
  downloadText: {
    color: '#fff',
    textAlign:'center',
    fontSize:20,
    fontWeight:'700',
  },
});

export default MovieDetails;
