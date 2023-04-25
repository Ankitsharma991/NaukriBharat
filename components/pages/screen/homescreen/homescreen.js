import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import SelectDropdown from 'react-native-select-dropdown'


export default function HomeScreen() {
  const profession = ["actor", "singer", "dancer", "model", "musician", "comedian", "artist", "writer", "director", "producer", "designer", "photographer", "editor", "barber","police","plumber","doctor","teacher","engineer","lawyer","accountant","architect","farmer","chef","pilot","nurse","firefighter","scientist","astronaut","judge","policeman",
  "labour"];
  return (
    <View style={styles.container}>
      {/* Menu icon on the upper left */}
      <TouchableOpacity style={styles.menuButton}>
        <Ionicons name="menu-outline" size={30} color="black" />
      </TouchableOpacity>

      {/* Profile icon on the upper right */}
      <TouchableOpacity style={styles.profileButton}>
        <Ionicons name="person-circle-outline" size={30} color="black" />
      </TouchableOpacity>

      {/* Body of the home screen */}
      <View style={styles.body}>
        <Text style={styles.subtitle}>This is the Home Screen</Text>
      </View>
      <View style={styles.professionFilter}>
  

        <SelectDropdown
          data={profession}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
        />
            

      </View>
      <View style={styles.postRequirement}>
        <TextInput placeholder="Post a requirement" style={styles.inputField} />
        <TouchableOpacity style={styles.postButton}>
              <Text style={styles.postText}>Post</Text>
            </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    position: "relative",
  },
  menuButton: {
    position: "absolute",
    top: 10,
    left: 10,
    padding: 10,
  },
  profileButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
  },
  body: {
    flex: 1,
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
    right: 55,
    padding: 10,
    marginBottom: 1500,
    

  },
  postRequirement: {
    position:"absolute",
    top:18,
    left:50,

  },
  inputField: {
    height: 30,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    margin: 4,
  },
  postButton:{
    position:"absolute",
    backgroundColor: "#00ff00",
    padding: 2,
    margin: 8,
    height: 25,
    width: 50,
    borderRadius: 10,
    left:210
    
  }
});
