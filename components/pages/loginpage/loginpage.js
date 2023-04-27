// Importing required modules and functions
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
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
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => handleLoginFormInputChange("email", text)}
        value={loginData.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => handleLoginFormInputChange("password", text)}
        value={loginData.password}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLoginFormSubmit} />
      <Text style={styles.professionText}>Don't have an account?</Text>
      <Text style={styles.professionText}>Register here:</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate("SignupPage")}
      />
      <Text style={styles.professionText}>Continue without login:</Text>
      <Button
        title="Continue"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
};

// Styling for the login form
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: "90%",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default LoginPage;
