import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// STYLE/COMPO
import userProfileStyles from '../styles/UserProfileStyles';
import CustomButton from '../components/CustomButton';
import { Feather, Fontisto, Entypo, AntDesign } from 'react-native-vector-icons';

// FIREBASE
import { getAuth, signOut, deleteUser } from 'firebase/auth';
import {
    doc,
    getFirestore,
    updateDoc,
    getDoc,
    deleteDoc,
} from 'firebase/firestore';

const UserProfileScreen = () => {
    const auth = getAuth();
    const navigation = useNavigation();
    const db = getFirestore();

    const user = auth.currentUser;

    const [status, setStatus] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [bio, setBio] = useState('');

    // Local state variables for editing
    const [editedFirstName, setEditedFirstName] = useState('');
    const [editedLastName, setEditedLastName] = useState('');
    const [editedBio, setEditedBio] = useState('');

    const loadUserData = async () => {
        if (user) {
            const userDocRef = doc(db, 'users', user.uid);

            try {
                const docSnapshot = await getDoc(userDocRef);
                if (docSnapshot.exists()) {
                    const userData = docSnapshot.data();

                    // Load data into state
                    setFirstName(userData.firstName || '');
                    setLastName(userData.lastName || '');
                    setEmail(userData.email);
                    setPhoneNumber(userData.phoneNumber);
                    setAddress(userData.address);
                    setBio(userData.bio || ''); // Added for loading bio
                    setStatus(userData.status);
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
                // Create an object to hold the fields to update
                const updatedFields = {
                    firstName: editedFirstName || firstName,
                    lastName: editedLastName || lastName,
                    phoneNumber,
                    address,
                    bio: editedBio || bio,
                };

                // Check if status is defined before adding it to the update object
                if (status !== undefined) {
                    updatedFields.status = status;
                }

                // Update the document with the fields
                await updateDoc(userDocRef, updatedFields);

                Alert.alert('Profile Updated', 'Your profile has been updated successfully.');

                // Reload the screen
                navigation.goBack();
            } catch (error) {
                console.error('Profile update error:', error);
                Alert.alert('Error', 'An error occurred while updating your profile.');
            }
        } else {
            Alert.alert('User Not Logged In', 'Please log in to save your profile changes.');
        }
    };

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: '#E5E8E1', flexGrow: 1 }}>
            <View style={userProfileStyles.backgroundContainer}>
                <View style={[userProfileStyles.circle, userProfileStyles.circle1]}></View>
                <View style={[userProfileStyles.circle, userProfileStyles.circle2]}></View>
                <View style={[userProfileStyles.circle, userProfileStyles.circle3]}></View>
                <View style={[userProfileStyles.circle, userProfileStyles.circle4]}></View>
                <View style={[userProfileStyles.circle, userProfileStyles.circle5]}></View>
                <View style={[userProfileStyles.circle, userProfileStyles.circle6]}></View>

                {/* Container for Edit Profile Elements */}
                <View style={userProfileStyles.editProfileContainer}>
                    <Text style={userProfileStyles.screenTitle}>EDIT PROFILE</Text>
                    <Image
                        source={require('../img/Profile/power.png')}
                        style={userProfileStyles.profilePic}
                    />
                    <Text style={userProfileStyles.name}>
                        {user ? `${firstName} ${lastName}`.trim() || 'No logged user' : 'No logged user'}
                    </Text>
                    <TextInput
                        style={userProfileStyles.statusText}
                        value={status}
                        onChangeText={(text) => setStatus(text)}
                        placeholder="Custom status here"
                        editable={user ? true : false}
                    />
                    <Text style={[userProfileStyles.label, userProfileStyles.textBio]}>Bio</Text>
                    <TextInput
                        style={[userProfileStyles.input, { height: 129 }]}
                        multiline={true}
                        value={editedBio || bio}
                        onChangeText={(text) => setEditedBio(text)}
                        editable={user ? true : false}
                    />
                    <Text style={[userProfileStyles.label, userProfileStyles.textName]}>First Name</Text>
                    <TextInput
                        style={[userProfileStyles.input, { fontFamily: 'Poppins_400Regular' }]}
                        value={editedFirstName || firstName}
                        onChangeText={(text) => setEditedFirstName(text)}
                        editable={user ? true : false}
                    />

                    <Text style={[userProfileStyles.label, userProfileStyles.textName]}>Last Name</Text>
                    <TextInput
                        style={[userProfileStyles.input, { fontFamily: 'Poppins_400Regular' }]}
                        value={editedLastName || lastName}
                        onChangeText={(text) => setEditedLastName(text)}
                        editable={user ? true : false}
                    />
                    <Text style={[userProfileStyles.label, userProfileStyles.textEmail]}>Email</Text>
                    <TextInput
                        style={userProfileStyles.emailInput}
                        value={email}
                        editable={false}
                    />
                    <Text style={[userProfileStyles.label, userProfileStyles.textNum]}>Phone Number</Text>
                    <TextInput
                        style={userProfileStyles.input}
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                        editable={user ? true : false}
                    />
                    <Text style={[userProfileStyles.label, userProfileStyles.textAdd]}>Address</Text>
                    <TextInput
                        style={[userProfileStyles.input, { height: 86 }]}
                        multiline={true}
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                        editable={user ? true : false}
                    />
                    <CustomButton
                        title="Save"
                        onPress={handleSaveProfile}
                        style={[userProfileStyles.changeButton]}
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={userProfileStyles.goBackButton}>
                    <AntDesign name="leftcircle" size={46} color="#6D9773" />
                </TouchableOpacity>
                {/* End of Edit Profile Elements */}
            </View>
        </ScrollView>
    );
};

export default UserProfileScreen;
