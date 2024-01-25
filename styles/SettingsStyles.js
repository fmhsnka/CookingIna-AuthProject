import { StyleSheet } from 'react-native';

const settingsStyles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: '#E5E8E1',
        flexGrow: 1,
    },
    circleContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        position: 'absolute',
        borderRadius: 50,
        width: 100,
        height: 100,
        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    circle1: {
        top: 110,
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
    circle2: {
        top: 160,
        left: -5,
        backgroundColor: '#FFBA00',
        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    circle3: {
        top: 220,
        right: -20,
        backgroundColor: '#FFBA00',
        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    circle4: {
        top: 280,
        right: -50,
        backgroundColor: '#0C3B2E',
        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    circle5: {
        bottom: 100,
        left: -60,
        backgroundColor: '#0C3B2E',
        height: 180,
        width: 180,
        borderRadius: 140,
    },
    circle6: {
        bottom: 210,
        right: -80,
        backgroundColor: '#FFBA00',
        height: 180,
        width: 180,
        borderRadius: 140,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 23,
        marginTop: 60,
        marginBottom: 30,
        fontFamily: 'Poppins_600SemiBold',
    },
    sectionContainer: {
        // backgroundColor: 'white',
        padding: 20,
        borderRadius: 14,
        // marginVertical: 5,
        width: '90%',
        justifyContent: 'center',
    },
    sectionTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 14,
        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    sectionIcon: {
        marginRight: 10,
        color: '#0C3B2E',
    },
    sectionTitle: {
        fontSize: 18,
        color: '#0C3B2E',
        fontFamily: 'Poppins_400Regular',
        marginLeft: 10,
    },
    input: {
        width: '100%',
        height: 56,
        borderWidth: 0,
        marginBottom: 15,
        padding: 10,
        fontSize: 16,
        borderRadius: 14,
        backgroundColor: 'white',
        textAlign: 'left',
        justifyContent: 'center',
        fontFamily: 'Poppins_400Regular',

        // Android shadow
        elevation: 5,

        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    confirmButton: {
        backgroundColor: '#6D9773',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        width: 120,
        alignSelf: 'flex-end',
        marginRight: 15,
    },
    confirmButtonText: {
        color: '#E5E8E1',
        fontFamily: 'Poppins_600SemiBold',
    },
    languageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    privacyMattersContainer: {
        alignItems: 'center',
        marginVertical: 65,
    },
    privacyMattersText: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'Poppins_400Regular',
    },
    goBackButton: {
        position: 'absolute',
        top: 54,
        left: 20,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    changepass: {
        marginBottom: 30,
    },
    privacy: {
        marginBottom: 10
    },
    showPasswordButton: {
        position: 'absolute',
        top: 16,
        right: 12,
        opacity: .35,
      },
});

export default settingsStyles;
