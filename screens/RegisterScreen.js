import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import registerStyles from '../styles/RegisterStyles';
import CustomButton from '../components/CustomButton';
import { isPasswordValid, isEmailValid } from '../components/validation';

const RegisterScreen = () => {

    const navigation = useNavigation()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword1, setShowPassword1] = useState(false);
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const handleRegister = () => {
        if (!isEmailValid(email)) {
            Alert.alert('Invalid Email', 'Please enter a valid email address.');
            return;
        }

        let passwordRequirements = [];

        if (!/[a-z]/.test(password)) {
            passwordRequirements.push('at least one lowercase letter');
        }
        if (!/[A-Z]/.test(password)) {
            passwordRequirements.push('at least one uppercase letter');
        }
        if (!/\d/.test(password)) {
            passwordRequirements.push('at least one numeric digit');
        }
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            passwordRequirements.push('at least one special character');
        }
        if (password.length < 8 || password.length > 15) {
            passwordRequirements.push('between 8 and 15 characters in length');
        }

        if (passwordRequirements.length === 0) {
            Alert.alert('Password Strength', 'Password strength: Strong');
        } else {
            Alert.alert(
                'Weak Password',
                `Password should contain ${passwordRequirements.join(', ')}.`
            );
        }

        if (password !== confirmPassword) {
            setPasswordMismatch(true);
        } else {
            setPasswordMismatch(false);
        }

        console.log('Registering...');
    };

    return (
        <View style={registerStyles.container}>
            <Text style={[registerStyles.registerText, { fontFamily: 'Poppins_900Black' }]}>REGISTER</Text>
            <Text style={[registerStyles.descriptionText, { fontFamily: 'Poppins_400Regular' }]}>Enter your personal information</Text>
            <TextInput
                style={[registerStyles.input, { fontFamily: 'Poppins_400Regular' }]}
                placeholder="First Name"
                value={firstName}
                onChangeText={text => setFirstName(text)}
            />
            <TextInput
                style={[registerStyles.input, { fontFamily: 'Poppins_400Regular' }]}
                placeholder="Last Name"
                value={lastName}
                onChangeText={text => setLastName(text)}
            />
            <TextInput
                style={[registerStyles.input, { fontFamily: 'Poppins_400Regular' }]}
                placeholder="Username"
                value={username}
                onChangeText={text => setUsername(text)}
            />
            <TextInput
                style={[registerStyles.input, { fontFamily: 'Poppins_400Regular' }]}
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <View style={registerStyles.passwordContainer}>
                <TextInput
                    style={[registerStyles.input, registerStyles.passwordInput, { fontFamily: 'Poppins_400Regular' }]}
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Text style={[registerStyles.togglePassword, { fontFamily: 'Poppins_400Regular' }]}>
                        {showPassword ? 'Hide' : 'Show'}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={registerStyles.passwordContainer2}>
                <TextInput
                    style={[registerStyles.input, registerStyles.passwordInput, { fontFamily: 'Poppins_400Regular' }]}
                    placeholder="Confirm Password"
                    secureTextEntry={!showPassword1}
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                />
                <TouchableOpacity onPress={() => setShowPassword1(!showPassword1)}>
                    <Text style={[registerStyles.togglePassword, { fontFamily: 'Poppins_400Regular' }]}>
                        {showPassword1 ? 'Hide' : 'Show'}
                    </Text>
                </TouchableOpacity>
            </View>
            {passwordMismatch && (
                <Text style={[{ color: 'red', fontSize: 18, fontFamily: 'Poppins_400Regular' }]}>
                    Passwords do not match.
                </Text>
            )}

            <CustomButton
                title="Register"
                onPress={handleRegister}
                style={{ backgroundColor: '#FF4732', width: 300 }}
                textStyle={{ color: 'white', fontFamily: 'Poppins_400Regular' }}
            />
            <View style={{ flexDirection: 'row' }}>
                <Text style={[registerStyles.noacc, { fontFamily: 'Poppins_400Regular', color: 'black' }]}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={[registerStyles.noacc, { fontFamily: 'Poppins_400Regular', color: 'red' }]}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RegisterScreen;