import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import welcomeStyles from '../styles/welcomeStyles';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    const handleGetStarted = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={welcomeStyles.container}>
            <Text style={welcomeStyles.welcomeText}>Welcome to Our App</Text>
            <Button
                title="Get Started"
                onPress={handleGetStarted}
                style={welcomeStyles.getStartedButton}
            />
        </View>
    );
};

export default WelcomeScreen;