import { StyleSheet } from 'react-native';

const userProfileStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    profilePic: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 0,
    },
    statusText: {
        fontSize: 16,
        margin: 10,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 0,
    },
    input: {
        width: 300,
        height: 40,
        borderBottomWidth: 1,
        marginBottom: 15,
        padding: 10,
        fontSize: 16,
    },
    text: {
        fontSize: 16,
        marginBottom: 15,
    },
    logoutButton: {
        fontSize: 18,
        color: 'blue',
    },
    emailContainer: {
        width: 300,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
    },
    changeButton: {
        color: 'white',
        margin: 5,
        padding: 5,
        backgroundColor: '#FF4732',
        borderRadius: 20,
        fontSize: 12,
    },
    emailText: {
        margin: 10,
        marginBottom: 15,
        fontSize: 16,
        width: 300,
        textAlign: 'center',
    }
});

export default userProfileStyles;
