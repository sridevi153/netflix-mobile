import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Navbar = ({navigation}) => {

    return (
        <View style={styles.navbar}>
            <Image
                style={styles.logo}
                source={require('./Netflix-Symbol.png')}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.link}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MoviesC')}>
                <Text style={styles.link}>Movies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageIcon} onPress={() => navigation.navigate('Login')}>
            <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' }}
                style={styles.image}
            />
        </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        backgroundColor: '#000',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    link: {
        color: '#fff',
        fontSize: 20,
        padding:10,
    },
    imageIcon: {
        marginLeft: 120,
        paddingTop:5,
    },
    image: {
        width: 35,
        height: 38,
    },
});

export default Navbar;
