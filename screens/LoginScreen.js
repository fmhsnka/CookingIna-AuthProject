import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import loginStyles from '../styles/LoginStyles';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
        console.log('Logging in...');
    };

    return (
        <View style={loginStyles.container}>
            <Image source={require('../img/Logo/AMBATU.png')} style={loginStyles.logo} />
            <TextInput
                style={loginStyles.input}
                placeholder="EMAIL"
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={loginStyles.input}
                placeholder="PASSWORD"
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity style={loginStyles.button} onPress={handleLogin}>
                <Text style={loginStyles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <Text>
                <TouchableOpacity onPress={() => {}}>
                    <Text style={loginStyles.pressableText}>Don't have an account? Register</Text>
                </TouchableOpacity>
            </Text>
        </View>
    );
};

export default LoginScreen;