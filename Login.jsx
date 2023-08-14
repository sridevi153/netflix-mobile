import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if (username && password) { 
            navigation.navigate('Home');
        } else {
            Alert.alert('Error', 'Please enter valid credentials.');
        }
    };

    useFocusEffect(
      React.useCallback(() => {
          setUsername('');
          setPassword('');
      }, [])
  );

    return (
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={{ uri: 'https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456' }}
            />
            <Image 
                style={styles.background}
                source={{ uri: 'https://static.standard.co.uk/2022/11/16/10/netflix-s.jpg?width=1200' }}
            />
            <View style={styles.loginContainer}>
                <Text style={styles.title}>Sign In</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email or PhoneNumber"
                    value={username}
                    onChangeText={setUsername}
                    placeholderTextColor="#fff"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    placeholderTextColor="#fff"
                />
                <Text style={styles.login} onPress={handleSubmit}> Login </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        position: 'absolute',
        top: 20,
        right: 250,
        width:150,
        height:40,
    },
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0.3,
    },
    loginContainer: {
        width: '80%',
        height: 400,
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.7)',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 20,
        paddingBottom:40,
        paddingTop:10,
    },
    input: {
        width: '100%',
        backgroundColor: '#282828',
        marginBottom: 20,
        color: '#fff',
        paddingHorizontal: 10,
        borderRadius: 3,
    },
    login: {
      color: '#fff',
      backgroundColor: 'red',
      padding:10,
      fontWeight:'600',
      fontSize:20,
      marginTop:22,
      width:280,
      textAlign:'center',
    },
});

export default Login;
