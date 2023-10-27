import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import loginStyles from '../styles/LoginStyles';
import CustomButton from '../components/CustomButton';
import { useFonts, Poppins_400Regular, Poppins_900Black, Poppins_700Bold } from '@expo-google-fonts/poppins';


const LoginScreen = () => {

    const navigation = useNavigation()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    let [fontsLoaded, fontError] = useFonts({
        Poppins_900Black, Poppins_400Regular, Poppins_700Bold
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const handleLogin = () => {
        // LOGIC
        console.log('Logging in...');
    };

    return (
        <View style={loginStyles.container}>
                <Text style={[loginStyles.loginText, { fontFamily: 'Poppins_900Black' }]}>LOGIN</Text>
                <Text style={[loginStyles.descriptionText, { fontFamily: 'Poppins_400Regular' }]}>Login to continue using this app</Text>

                <TextInput
                    style={[loginStyles.input, { fontFamily: 'Poppins_400Regular' }]}
                    placeholder="Username"
                    value={username}
                    onChangeText={text => setUsername(text)}
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

                <TouchableOpacity onPress={() => console.log('Forgot Password?')}>
                    <Text style={[loginStyles.forgotPassword, { fontFamily: 'Poppins_400Regular' }]}>Forgot Password?</Text>
                </TouchableOpacity>

                <CustomButton
                    title="Login"
                    onPress={handleLogin}
                    style={{ backgroundColor: 'red', width: 300 }}
                    textStyle={{ color: 'white', fontFamily: 'Poppins_400Regular' }}
                />

                <TouchableOpacity onPress={() => console.log('Create acc')}>
                    <Text style={[loginStyles.noacc, { fontFamily: 'Poppins_400Regular' }]}>Don't have an account?</Text>
                </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;