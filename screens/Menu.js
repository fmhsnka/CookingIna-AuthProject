import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome5, Ionicons } from 'react-native-vector-icons';


import menuStyles from '../styles/MenuStyles';
import { useNavigation } from '@react-navigation/native';

// FONTS
import {
    useFonts,
    Poppins_400Regular,
    Poppins_900Black,
    Poppins_700Bold,
    Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

// FIREBASE
import { getAuth, signOut, deleteUser } from 'firebase/auth';
import {
    doc,
    getFirestore,
    getDoc,
    deleteDoc,
} from 'firebase/firestore';

const Menu = () => {
    const auth = getAuth();
    const navigation = useNavigation();
    const db = getFirestore();
    const user = auth.currentUser;

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });



    const loadUserData = async () => {
        if (user) {
            const userDocRef = doc(db, 'users', user.uid);

            try {
                const docSnapshot = await getDoc(userDocRef);
                if (docSnapshot.exists()) {
                    const userData = docSnapshot.data();
                    setUserData(userData);
                }
            } catch (error) {
                console.error('Error loading user data:', error);
            }
        }
    };

    useEffect(() => {
        loadUserData();
    }, [user]);

    const handleLogout = () => {
        if (user) {
            signOut(auth)
                .then(() => {
                    console.log('Logged out successfully');
                    navigation.navigate('Login');
                })
                .catch((error) => {
                    console.error('Logout error:', error);
                });
        } else {
            Alert.alert('User Not Logged In', 'No need to log out.');
        }
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

    const handleProfilePress = () => {
        // console.log('Navigate to Profile Screen');
        navigation.navigate('UserProfile');
    };

    const handleFavoritesPress = () => {
        // Replace 'FavoritesScreen' with the name of the screen you want to navigate to
        console.log('Navigate to Favorites Screen');
        // navigation.navigate('FavoritesScreen');
    };

    const handleSettingsPress = () => {
        // console.log('Navigate to Settings Screen');
        navigation.navigate('Settings');
    };

    const handleHelpPress = () => {
        // console.log('Navigate to Help Screen');
        navigation.navigate('About');
    };

    let [fontsLoaded, fontError] = useFonts({
        Poppins_900Black,
        Poppins_400Regular,
        Poppins_700Bold,
        Poppins_600SemiBold,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={menuStyles.backgroundContainer}>
            <View style={[menuStyles.circle, menuStyles.circle1]} />
            <View style={[menuStyles.circle, menuStyles.circle2]} />
            <View style={[menuStyles.circle, menuStyles.circle3]} />
            <View style={[menuStyles.circle, menuStyles.circle4]} />
            <View style={[menuStyles.circle, menuStyles.circle5]} />
            <View style={[menuStyles.circle, menuStyles.circle6]} />
            <View style={[menuStyles.circle, menuStyles.circle7]} />
            <View style={[menuStyles.circle, menuStyles.circle8]} />
            <View style={menuStyles.container}>
                {/* Close Icon */}
                <TouchableOpacity
                    style={menuStyles.closeButton}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="close-circle" size={46} color="#6D9773" />
                </TouchableOpacity>

                {/* Profile Pic, Name, and Email */}
                <View style={menuStyles.profileContainer}>
                    <Image source={require('../img/Profile/power.png')} style={menuStyles.profilePic} />
                    <Text style={menuStyles.name}>
                        {user ? `${userData.firstName} ${userData.lastName}` : 'No user logged'}
                    </Text>
                    <Text style={menuStyles.email}>
                        {user ? userData.email : 'No user logged'}
                    </Text>
                </View>

                {/* Buttons */}
                <View style={menuStyles.buttonsContainer}>
                    {menuItems.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                menuStyles.button,
                                (item.title === 'Delete Account') && menuStyles.DeleteButton,
                                (item.title === 'Log Out') && menuStyles.LogoutButton,
                            ]}
                            onPress={() => {
                                if (item.title === 'Delete Account') {
                                    handleDeleteAccount();
                                } else if (item.title === 'Log Out') {
                                    handleLogout();
                                } else if (item.title === 'Profile') {
                                    handleProfilePress();
                                } else if (item.title === 'Favorites') {
                                    handleFavoritesPress();
                                } else if (item.title === 'Settings & Privacy') {
                                    handleSettingsPress();
                                } else if (item.title === 'About') {
                                    handleHelpPress();
                                } else {
                                    // Handle other button clicks
                                }
                            }}
                        >
                            <FontAwesome5
                                name={item.icon}
                                size={28}
                                style={[menuStyles.icon, (item.title === 'Delete Account') && menuStyles.blackIcon]}
                            />
                            <Text style={menuStyles.title}>{item.title}</Text>
                            <FontAwesome5 name="chevron-right" size={18} color="#000" style={menuStyles.arrow} />
                        </TouchableOpacity>
                    ))}
                </View>
                {/* <Image source={require('../img/Logo/splash-ina.png')} style={menuStyles.bottomImage} /> */}
            </View>
        </View>
    );
};

const menuItems = [
    { title: 'Profile', icon: 'user' },
    { title: 'Favorites', icon: 'heart' },
    { title: 'Settings & Privacy', icon: 'cog' },
    { title: 'About', icon: 'question-circle' },
    { title: 'Delete Account', icon: 'trash-alt' },
    { title: 'Log Out', icon: 'sign-out-alt' },
];

export default Menu;
