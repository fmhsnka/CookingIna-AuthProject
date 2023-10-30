import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// STYLES/COMPONENTS
import { LinearGradient } from "expo-linear-gradient";
import forgotPasswordStyles from "../styles/ForgotPasswordStyles";
import CustomButton from "../components/CustomButton";
import { isEmailValid } from "../components/validation";

// FIREBASE
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    if (!isEmailValid(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    const auth = getAuth();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent successfully
        Alert.alert(
          "Password Reset Email Sent",
          "Please check your email for the password reset link."
        );
        setEmail("");
        navigation.navigate("Login"); // Navigating back to the 'Login' screen
      })
      .catch((error) => {
        console.error("Password reset error:", error);
        Alert.alert(
          "Password Reset Error",
          "Unable to send a password reset email. Please check the email address."
        );
      });
  };

  return (
    <LinearGradient
      colors={["#ff8476", "#ffeeec", "#fff4f4", "#ffeeec", "#ff8476"]}
      style={{ flex: 1 }}
    >
      <View style={forgotPasswordStyles.container}>
        <Image
          source={require("../img/Logo/app.png")}
          style={forgotPasswordStyles.logo}
        />
        <Text
          style={[
            forgotPasswordStyles.title,
            { fontFamily: "Poppins_900Black" },
          ]}
        >
          Forgot Your Password?
        </Text>
        <Text
          style={[
            forgotPasswordStyles.description,
            { fontFamily: "Poppins_400Regular" },
          ]}
        >
          Enter your email address, and we'll send you a password reset link.
        </Text>
        <TextInput
          style={[
            forgotPasswordStyles.input,
            { fontFamily: "Poppins_400Regular" },
          ]}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <CustomButton
          title="Reset Password"
          onPress={handleResetPassword}
          style={{ backgroundColor: "#FF4732", width: 300 }}
          textStyle={{ color: "white", fontFamily: "Poppins_400Regular" }}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={[
              forgotPasswordStyles.goBack,
              { fontFamily: "Poppins_400Regular", color: "#FF4732" },
            ]}
          >
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default ForgotPasswordScreen;
