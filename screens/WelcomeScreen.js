import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import welcomeStyles from '../styles/welcomeStyles';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    const [loaded] = useFonts({
        Poppins: require('../fonts/Poppins/Poppins-Regular.ttf')
    });

    return (
        <View style={welcomeStyles.container}>
            <Image source={require('../img/Logo/app.png')} style={welcomeStyles.logo} />
            <Text style={[welcomeStyles.welcomeText, loaded && { fontFamily: 'Poppins' }]}>
                <Text style={{ fontWeight: 'bold' }}>Ambatu</Text>
                <Text style={{ fontWeight: '400' }}>Study</Text>
            </Text>
            <TouchableOpacity style={welcomeStyles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={[welcomeStyles.buttonText, loaded && { fontFamily: 'Poppins' }]}>
                    Login
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[welcomeStyles.button, { fontFamily: 'Poppins' }]} onPress={() => navigation.navigate('Register')}>
                <Text style={[welcomeStyles.buttonText]}>
                    Register
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;