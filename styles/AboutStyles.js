import { StyleSheet } from "react-native";

const aboutStyles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: '#E5E8E1',
        // justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
    },
    descriptionContainer: {
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 14, // Optional: add borderRadius for a rounded look
        width: '85%',
        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 40,
        borderRadius: 14,
        width: 150,
        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
        fontFamily: "Poppins_700Bold",
        textAlign: 'center',
    },
    title1: {
        fontSize: 18,
        marginBottom: 10,
        fontFamily: "Poppins_700Bold",
        textAlign: 'center',
    },
    title2: {
        fontSize: 15,
        fontFamily: "Poppins_700Bold",
        textAlign: 'center',
    },
    header: {
        fontSize: 24,
        marginVertical: 65,
        fontFamily: "Poppins_700Bold",
    },
    headercont: {
        fontSize: 18,
        fontFamily: "Poppins_700Bold",
    },
    description: {
        fontSize: 15,
        textAlign: 'justify',
        color: '#333',
        fontFamily: 'Poppins_400Regular',
        marginBottom: 20,
    },
    goBackButton: {
        position: 'absolute',
        top: 54,
        left: 25,
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
    },
    circle: {
        position: 'absolute',
        borderRadius: 50,
        width: 100,
        height: 100,
    },
    circle1: {
        top: -80,
        left: -40,
        backgroundColor: '#FFBA00',
        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    circle2: {
        top: 140,
        left: -35,
        backgroundColor: '#0C3B2E',
        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    circle4: {
        top: 20,
        right: -80,
        backgroundColor: '#0C3B2E',
        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    circle3: {
        top: 200,
        right: -25,
        backgroundColor: '#FFBA00',
        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    circle5: {
        bottom: 80,
        left: -30,
        backgroundColor: '#0C3B2E',
        height: 180,
        width: 180,
        borderRadius: 140,
    },
    circle6: {
        bottom: -75,
        right: -70,
        backgroundColor: '#FFBA00',
        height: 180,
        width: 180,
        borderRadius: 140,
    },
});

export default aboutStyles;
