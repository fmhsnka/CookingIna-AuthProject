import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    alignItems: "center",
    padding: 15,
    // borderRadius: 30,
    // borderWidth: 3,
  },
  noAccountContainer: {
    flexDirection: "row",
  },
  loginText: {
    fontSize: 60,
    margin: 0,
    letterSpacing: 0,
    textAlign: "left",
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 10,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    width: 255,
  },
  togglePassword: {
    fontSize: 11,
    color: "red",
    margin: 5,
    width: 35,
    textAlign: "center",
    textTransform: "uppercase",
  },
  forgotPassword: {
    fontSize: 18,
    color: "blue",
    marginBottom: 10,
  },
  noacc: {
    fontSize: 18,
    color: "blue",
    margin: 0,
  },
  button: {
    backgroundColor: "blue",
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default loginStyles;
