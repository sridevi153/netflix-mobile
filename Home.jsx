import React from 'react';
import { SafeAreaView, FlatList, Text } from 'react-native';
import Navbar from './Navbar';
import CarouselC from './CarouselC';
import CardList from './CardList';
import CardList2 from './CardList2';
import CardList3 from './CardList3';

function Home({ navigation }) {
  const componentsToRender = [
    { component: <Navbar navigation={navigation}/> },
    { component: <CarouselC /> },
    { component: <Text style={{color:'white', fontSize:20, fontWeight:600, padding:10}}>Top 10 Movies</Text> },
    { component: <CardList /> },
    { component: <Text style={{color:'white', fontSize:20, fontWeight:600, padding:10}}>Action Movies</Text> },
    { component: <CardList2 /> },
    { component: <Text style={{color:'white', fontSize:20, fontWeight:600, padding:10}}>Horror Movies</Text> },
    { component: <CardList3 /> },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <FlatList
        data={componentsToRender}
        keyExtractor={(item, index) => 'key-' + index}
        renderItem={({ item }) => item.component}
      />
    </SafeAreaView>
  );
}

export default Home;
