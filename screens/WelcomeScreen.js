import { useCallback, React } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import welcomeStyles from '../styles/welcomeStyles';
import { useFonts, Poppins_400Regular, Poppins_900Black, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import CustomButton from '../components/CustomButton';
import * as SplashScreen from 'expo-splash-screen';


const WelcomeScreen = () => {
    const navigation = useNavigation();
    SplashScreen.preventAutoHideAsync();


    let [fontsLoaded, fontError] = useFonts({
        Poppins_900Black, Poppins_400Regular, Poppins_600SemiBold
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }


    return (

        <View style={welcomeStyles.container} onLayout={onLayoutRootView}>
            <Image source={require('../img/Logo/app.png')} style={welcomeStyles.logo} />
            <Text style={welcomeStyles.welcomeText}>
                <Text style={[{ fontFamily: 'Poppins_900Black' }]}>Ambatu</Text>
                <Text style={[{ fontFamily: 'Poppins_400Regular' }]}>Study</Text>
            </Text>

            <CustomButton
                title="Login"
                onPress={() => { navigation.navigate('Login') }}
                style={{ backgroundColor: '#FF4732', width: 300 }}
                textStyle={{ color: 'white', fontFamily: 'Poppins_600SemiBold' }}
            />

            <CustomButton
                title="Register"
                onPress={() => { navigation.navigate('Register') }}
                style={{ backgroundColor: '#FF4732', width: 300 }}
                textStyle={{ color: 'white', fontFamily: 'Poppins_600SemiBold' }}
            />
        </View>
    );
};

export default WelcomeScreen;