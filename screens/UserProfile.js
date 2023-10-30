import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// STYLE/COMPO
import userProfileStyles from '../styles/UserProfileStyles';
import CustomButton from '../components/CustomButton';
import { LinearGradient } from 'expo-linear-gradient';

// FIREBASE
import { getAuth, signOut, deleteUser } from 'firebase/auth';
import {
    collection,
    doc,
    getFirestore,
    updateDoc,
    getDoc,
    deleteDoc,
} from 'firebase/firestore';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    getStorage,
} from 'firebase/storage';

// SCREEN
const UserProfileScreen = () => {
    const auth = getAuth();
    const navigation = useNavigation();
    const db = getFirestore();
    const storage = getStorage();

    const user = auth.currentUser;

    const [status, setStatus] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    // UNTESTED
    const uploadProfilePicture = async (imageUri) => {
        try {
            const storageRef = ref(storage, `profilePictures/${user.uid}`);
            await uploadBytes(storageRef, imageUri);
            const downloadURL = await getDownloadURL(storageRef);
            const userDocRef = doc(db, 'users', user.uid);

            await updateDoc(userDocRef, { profilePicture: downloadURL });
            setProfilePicture(downloadURL);
        } catch (error) {
            console.error('Profile picture upload error:', error);
        }
    };

    const loadUserData = async () => {
        if (user) {
            const userDocRef = doc(db, 'users', user.uid);

            try {
                const docSnapshot = await getDoc(userDocRef);
                if (docSnapshot.exists()) {
                    const userData = docSnapshot.data();
                    setFirstName(userData.firstName);
                    setLastName(userData.lastName);
                    setEmail(userData.email);
                    setPhoneNumber(userData.phoneNumber);
                    setAddress(userData.address);
                    setStatus(userData.status);
                    setProfilePicture(userData.profilePicture);
                }
            } catch (error) {
                console.error('Error loading user data:', error);
            }
        }
    };

    useEffect(() => {
        loadUserData();
    }, [user]);

    const handleSaveProfile = async () => {
        if (user) {
            const userDocRef = doc(db, 'users', user.uid);

            try {
                await updateDoc(userDocRef, {
                    firstName,
                    lastName,
                    phoneNumber,
                    address,
                    status,
                });

                Alert.alert('Profile Updated', 'Your profile has been updated successfully.');
            } catch (error) {
                console.error('Profile update error:', error);
                Alert.alert('Error', 'An error occurred while updating your profile.');
            }
        } else {
            Alert.alert('User Not Logged In', 'Please log in to save your profile changes.');
        }
    };

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log('Logged out successfully');
                navigation.navigate('Login');
            })
            .catch((error) => {
                console.error('Logout error:', error);
            });
    };

    const handleDeleteAccount = async () => {
        if (user) {
            Alert.alert(
                'Delete Account',
                'Are you sure you want to delete your account?',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    {
                        text: 'Delete',
                        onPress: async () => {
                            const userDocRef = doc(db, 'users', user.uid);

                            try {
                                await deleteDoc(userDocRef);
                                await deleteUser(user);

                                console.log('Account and document data deleted successfully');
                                Alert.alert('Success', 'Account data deleted successfully.');
                                navigation.navigate('Login');
                            } catch (error) {
                                console.error('Delete account error:', error);
                                Alert.alert('Error', 'An error occurred while deleting your account.');
                            }
                        },
                    },
                ]
            );
        } else {
            Alert.alert('User Not Logged In', 'Please log in to delete your account.');
        }
    };

    return (
        <LinearGradient
            colors={['#ff8476', '#ffebe9', '#ffebe9', '#ffebe9', '#ffebe9', '#ffebe9', '#ff8476']}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={userProfileStyles.container}>
                <Image
                    source={
                        profilePicture
                            ? { uri: profilePicture }
                            : require('../img/Profile/power.png')
                    }
                    style={userProfileStyles.profilePic}
                />
                <TextInput
                    style={userProfileStyles.statusText}
                    value={status}
                    onChangeText={(text) => setStatus(text)}
                    placeholder="Your status goes here"
                />
                <Text style={[userProfileStyles.label, { fontFamily: 'Poppins_900Black' }]}>
                    Name:
                </Text>
                <TextInput
                    style={[userProfileStyles.input, { fontFamily: 'Poppins_400Regular' }]}
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={(text) => setFirstName(text)}
                />
                <TextInput
                    style={[userProfileStyles.input, { fontFamily: 'Poppins_400Regular' }]}
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={(text) => setLastName(text)}
                />
                <Text style={[userProfileStyles.label, { fontFamily: 'Poppins_900Black' }]}>
                    Email:
                </Text>
                <Text style={[userProfileStyles.emailText, { fontFamily: 'Poppins_400Regular' }]}>
                    {email}
                </Text>
                <Text style={[userProfileStyles.label, { fontFamily: 'Poppins_900Black' }]}>
                    Phone Number:
                </Text>
                <TextInput
                    style={[userProfileStyles.input, { fontFamily: 'Poppins_400Regular' }]}
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                />
                <Text style={[userProfileStyles.label, { fontFamily: 'Poppins_900Black' }]}>
                    Address:
                </Text>
                <TextInput
                    style={[userProfileStyles.input, { fontFamily: 'Poppins_400Regular' }]}
                    placeholder="Address"
                    value={address}
                    onChangeText={(text) => setAddress(text)}
                />
                <CustomButton
                    title="Save Profile"
                    onPress={handleSaveProfile}
                    style={{ backgroundColor: '#FF4732', width: 300 }}
                    textStyle={{ color: 'white', fontFamily: 'Poppins_600SemiBold' }}
                />
                <CustomButton 
                    title="Logout"
                    onPress={handleLogout}
                    style={{ backgroundColor: '#FF4732', width: 300 }}
                    textStyle={{ color: 'white', fontFamily: 'Poppins_600SemiBold' }}
                />
                <CustomButton
                    title="Delete Account"
                    onPress={handleDeleteAccount}
                    style={{ backgroundColor: '#FF4732', width: 300 }}
                    textStyle={{ color: 'white', fontFamily: 'Poppins_600SemiBold' }}
                />
            </ScrollView>
        </LinearGradient>
    );
};

export default UserProfileScreen;
