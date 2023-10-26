import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import loginStyles from '../styles/LoginStyles';
import { useFonts } from 'expo-font';



const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
        console.log('Logging in...');
    };
    const [loaded] = useFonts({
        Poppins: require('../fonts/Poppins/Poppins-Regular.ttf')
    });

    return (
        <View style={loginStyles.container}>
            <Image source={require('../img/Logo/app.png')} style={loginStyles.logo} />
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
                <TouchableOpacity onPress={() => { }}>
                    <Text style={[loginStyles.pressableText, loaded && { fontFamily: 'Poppins' }]}>
                        <Text >Don't have an Account? </Text>
                        <Text style={[loginStyles.pressableText, { fontWeight: '400' }]} onPress={() => { navigation.navigate('Register') }}>Create</Text>
                    </Text>
                </TouchableOpacity>
            </Text>
        </View>
    );
};

export default LoginScreen;