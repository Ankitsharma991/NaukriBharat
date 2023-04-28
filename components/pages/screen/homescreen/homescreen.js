import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import User from "../profile/user/user";
import { Alert } from "react-native";

export default function HomeScreen() {
  const professions = [
    "actor",
    "singer",
    "dancer",
    "model",
    "musician",
    "comedian",
    "artist",
    "writer",
    "director",
    "producer",
    "designer",
    "photographer",
    "editor",
    "barber",
    "police",
    "plumber",
    "doctor",
    "teacher",
    "engineer",
    "lawyer",
    "accountant",
    "architect",
    "farmer",
    "chef",
    "pilot",
    "nurse",
    "firefighter",
    "scientist",
    "astronaut",
    "judge",
    "policeman",
    "labour",
  ];

  const handleMenuButtonClick = () => {
    Alert.alert("Menu button clicked");
  };

  const handleProfileButtonClick = () => {
    Alert.alert("Profile button clicked");
  };

  const handlePostButtonClick = () => {
    Alert.alert("Post button clicked");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <View style={styles.headerItemsContainer}> */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={handleMenuButtonClick}
        >
          <Ionicons name="menu-outline" size={40} color="black" />
        </TouchableOpacity>
        <TextInput placeholder="Post a requirement" style={styles.inputField} />
        <Text onPress={handlePostButtonClick} style={styles.postText}>
          Post
        </Text>
        <Ionicons
          onPress={handleProfileButtonClick}
          name="person-circle-outline"
          size={40}
          color="black"
        />
      </View>
      {/* </View> */}
      {/* Menu icon on the upper left */}

      <View style={styles.fullScreen}>
        <User />
      </View>

      {/* Body of the home screen */}
      <View style={styles.professionFilter}>
        <SelectDropdown
          data={professions}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    position: "relative",
    backgroundColor: "#ffc0cb",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  headerItemsContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  menuButton: {
    // marginRight:,
  },
  // profileButton: {
  //   position: "absolute",
  //   top: 10,
  //   right: 10,
  //   padding: 10,
  // },
  fullScreen: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    // marginHorizontal: -40,
  },
  body: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    position: "absolute",
    top: 2,
    padding: 2,
  },
  subtitle: {
    fontSize: 18,
  },

  professionFilter: {
    right: 5,
    padding: 10,
    marginBottom: 10,
  },
  postRequirement: {
    position: "absolute",
    top: 18,
    left: 50,
  },
  inputField: {
    height: 30,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    margin: 4,
  },
  postButton: {
    position: "absolute",
    backgroundColor: "#00ff00",
    padding: 2,
    margin: 8,
    height: 25,
    width: 50,
    borderRadius: 10,
    left: 210,
  },
});
