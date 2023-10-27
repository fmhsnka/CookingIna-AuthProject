import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import loginStyles from '../styles/LoginStyles';
import CustomButton from '../components/CustomButton';
import { useFonts, Poppins_400Regular, Poppins_900Black, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { isEmailValid } from '../components/validation';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase';

const LoginScreen = () => {

    const navigation = useNavigation()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    let [fontsLoaded, fontError] = useFonts({
        Poppins_900Black, Poppins_400Regular, Poppins_700Bold
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const isEmailVerified = (user) => {
        return user.emailVerified;
    }


    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Empty Fields', 'Please fill in all the required input fields.');
            return;
        }

        if (!isEmailValid(email)) {
            Alert.alert('Invalid Email', 'Please enter a valid email address.');
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if (isEmailVerified(user)) {
                console.log('User signed in:', user);
                // navigation.navigate('UserProfile');
            } else {
                Alert.alert('Email Not Verified', 'Please verify your email to log in.');
            }
        })
        .catch(error => {
            console.error('Login failed:', error);
            Alert.alert('Error', 'There were problem verifying your email.');
        });
    };

    return (
        <View style={loginStyles.container}>
            <Text style={[loginStyles.loginText, { fontFamily: 'Poppins_900Black' }]}>LOGIN</Text>
            <Text style={[loginStyles.descriptionText, { fontFamily: 'Poppins_400Regular' }]}>Login to continue using this app</Text>

            {/* <TextInput
                style={[loginStyles.input, { fontFamily: 'Poppins_400Regular' }]}
                placeholder="Username"
                value={username}
                onChangeText={text => setUsername(text)}
            /> */}

            <TextInput
                style={[loginStyles.input, { fontFamily: 'Poppins_400Regular' }]}
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <View style={loginStyles.passwordContainer}>
                <TextInput
                    style={[loginStyles.input, loginStyles.passwordInput, { fontFamily: 'Poppins_400Regular' }]}
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Text style={[loginStyles.togglePassword, { fontFamily: 'Poppins_400Regular' }]}>
                        {showPassword ? 'Hide' : 'Show'}
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                <Text style={[loginStyles.forgotPassword, { fontFamily: 'Poppins_400Regular', color: '#FF4732' }]}>Forgot Password?</Text>
            </TouchableOpacity>

            <CustomButton
                title="Login"
                onPress={handleLogin}
                style={{ backgroundColor: '#FF4732', width: 300 }}
                textStyle={{ color: 'white', fontFamily: 'Poppins_400Regular' }}
            />

            <View style={{ flexDirection: 'row' }}>
                <Text style={[loginStyles.noacc, { fontFamily: 'Poppins_400Regular', color: 'black' }]}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={[loginStyles.noacc, { fontFamily: 'Poppins_400Regular', color: 'red' }]}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;