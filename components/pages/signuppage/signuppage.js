import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  SafeAreaView,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import firebase from "../../../database/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import ImagePicker from "react-native-image-picker";

// Define a list of professions
const professions = ["Actor", "Administrator"];

// Initialize Firebase
const firebaseStore = getFirestore(firebase);
const auth = getAuth(firebase);
const storage = getStorage(firebase);

// Create a component for registration form
export default function RegistrationForm() {
  const navigation = useNavigation();

  // Define a state for the form data
  const [data, setData] = useState({
    fullName: "",
    address: "",
    contactNumber: "",
    password: "",
    profession: "",
    email: "",
    profilePicture: "",
  });

  const [image, setImage] = useState("");

  const handleImageUpload = async () => {
    try {
      // Open the file picker
      const imagePickerResponse = await ImagePicker.launchImageLibraryAsync();

      if (!imagePickerResponse.cancelled) {
        // Create a reference to the location where we want to store our image
        const imageRef = ref(storage, "images/" + Date.now().toString());

        // Upload the image file to Firebase Storage
        const snapshot = await uploadBytes(imageRef, imagePickerResponse.uri);

        // Get the download URL for the image
        const downloadURL = await snapshot.ref.getDownloadURL();

        // Set the image URL in our form data state
        setData({ ...data, profilePicture: downloadURL });
        setImage(downloadURL);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Destructure the form data from the state
  const { fullName, address, contactNumber, password, profession, email } =
    data;

  // Handle form submission on button press
  const handleRegisterFormSubmit = () => {
    // Check if all fields are filled
    if (
      fullName &&
      address &&
      contactNumber &&
      password &&
      profession &&
      email
    ) {
      // Create user with email and password
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Get user from user credentials
          const user = userCredential.user;
          console.log("User registered successfully!");

          // Add user details to the Firestore collection
          addDoc(collection(firebaseStore, "users"), {
            fullName: fullName,
            address: address,
            contactNumber: contactNumber,
            password: password,
            profession: profession,
            email: email,
            imageUrl: imageRef.fullPath,
          })
            .then((docRef) => {
              console.log("Document written with ID: ", docRef.id);
              navigation.navigate("LoginPage"); // navigate to the login screen
            })
            .catch((error) => {
              console.error("Error adding document: ", error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error registering user: ", error);
        });
    } else {
      console.error("Please fill all the fields");
    }
  };

  // Handle input change on text input change
  const handleRegistrationFormInputChange = (inputName, inputValue) => {
    const updatedFormState = { ...data };
    updatedFormState[inputName] = inputValue;
    setData(updatedFormState);
  };

  const handleLoginButtonPress = () => {
    navigation.navigate("LoginPage"); // navigate to the login screen
  };

  // Render the registration form
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={(text) =>
          handleRegistrationFormInputChange("fullName", text)
        }
        value={fullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        onChangeText={(text) =>
          handleRegistrationFormInputChange("address", text)
        }
        value={address}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        onChangeText={(text) =>
          handleRegistrationFormInputChange("contactNumber", text)
        }
        value={contactNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) =>
          handleRegistrationFormInputChange("password", text)
        }
        value={password}
        secureTextEntry={true}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) =>
          handleRegistrationFormInputChange("email", text)
        }
        value={email}
        keyboardType="email-address"
      />

      <Text style={styles.professionText}>Choose your profile picture:</Text>
      <Button title="Select Image" onPress={handleImageUpload} />

      <Text style={styles.professionText}>Choose your profession:</Text>
      <Picker
        style={styles.picker}
        selectedValue={profession}
        onValueChange={(itemValue, itemIndex) =>
          handleRegistrationFormInputChange("profession", itemValue)
        }
      >
        {professions.map((item, index) => (
          <Picker.Item key={index} label={item} value={item} />
        ))}
      </Picker>
      <Button title="Register" onPress={handleRegisterFormSubmit} />
      <Text style={styles.professionText}>Already have an account?</Text>
      <Text style={styles.professionText}>Login here:</Text>

      <Button title="Login" onPress={handleLoginButtonPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    width: "100%",
  },
  professionText: {
    marginVertical: 10,
    fontWeight: "bold",
  },
  picker: {
    width: "100%",
    height: 50,
    marginBottom: 10,
  },
});
