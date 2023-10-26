import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import welcomeStyles from '../styles/welcomeStyles';
import { useFonts, Poppins_400Regular, Poppins_900Black } from '@expo-google-fonts/poppins';
import CustomButton from '../components/CustomButton';


const WelcomeScreen = () => {
    const navigation = useNavigation();

    let [fontsLoaded, fontError] = useFonts({
        Poppins_900Black, Poppins_400Regular,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }


    return (

        <View style={welcomeStyles.container}>
            <Image source={require('../img/Logo/app.png')} style={welcomeStyles.logo} />
            <Text style={welcomeStyles.welcomeText}>
                <Text style={[{ fontFamily: 'Poppins_900Black' }]}>Ambatu</Text>
                <Text style={[{ fontFamily: 'Poppins_400Regular' }]}>Study</Text>
            </Text>
            <CustomButton
                title="Login"
                onPress={() => { navigation.navigate('Login') }}
                style={{ backgroundColor: 'red', width: 300 }}
                textStyle={{ color: 'white', fontFamily: 'Poppins_400Regular' }}
            />

            <CustomButton
                title="Register"
                onPress={() => { console.log("register") }}
                style={{ backgroundColor: 'red', width: 300 }}
                textStyle={{ color: 'white', fontFamily: 'Poppins_400Regular' }}
            />
        </View>
    );
};

export default WelcomeScreen;