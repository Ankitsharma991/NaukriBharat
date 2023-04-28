// Importing required modules and functions
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../../../database/firebase";
import React, { useState, useEffect } from "react";

// Initializing Firebase authentication
const auth = getAuth(firebase);

const LoginPage = () => {
  // Initializing state variables for login form data and logged in user
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Getting navigation object for navigation between screens
  const navigation = useNavigation();

  // Function to handle login form submit
  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoggedInUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  // Effect to navigate to home screen when user is logged in
  useEffect(() => {
    if (loggedInUser) {
      navigation.navigate("HomeScreen");
    }
  }, [loggedInUser]);

  // Function to handle login form input change
  const handleLoginFormInputChange = (name, value) => {
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Rendering login form with input fields for email and password, login button,
  // and a register button to navigate to the signup page
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => handleLoginFormInputChange("email", text)}
          value={loginData.email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => handleLoginFormInputChange("password", text)}
          value={loginData.password}
          secureTextEntry
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLoginFormSubmit}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.signupSection}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignupPage")}>
            <Text style={styles.signupButton}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Styling for the login form
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  form: {
    width: "80%",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#0077FF",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signupSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
  },
  signupButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0077FF",
    marginLeft: 5,
  },
});

export default LoginPage;
