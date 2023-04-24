import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function RegistrationPage() {
  const [data, setData] = useState({
    fullName: "",
    gender: "",
    dob: "",
    phoneNumber: "",
    address: "",
    profession: "",
    pic: null,
  });

  const handleRegistrationFormInput = (fieldName, value) => {
    setData({ ...data, [fieldName]: value });
  };

  return (
    <View style={styles.registrationPage}>
      <View style={styles.registrationContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.heading}>Registration Page</Text>
          <View style={styles.registrationForm}>
            <Text style={styles.inputLabel}>Full Name:</Text>
            <TextInput
              style={styles.inputField}
              onChangeText={(text) =>
                handleRegistrationFormInput("fullName", text)
              }
              value={data.fullName}
              placeholder="Enter your full name"
              required
            />
            <View style={styles.uploadContainer}>
              <Text style={styles.uploadLabel}>Upload Profile Image:</Text>
              <TouchableOpacity onPress={() => console.log("upload image")}>
                {/* <Image source={require("./path/to/default-image.png")} style={styles.profileImage} /> */}
              </TouchableOpacity>
            </View>
            <View style={styles.genderContainer}>
              <Text style={styles.inputLabel}>Gender:</Text>
              <TouchableOpacity
                style={[
                  styles.radioInput,
                  data.gender === "male" && styles.selectedRadio,
                ]}
                onPress={() => handleRegistrationFormInput("gender", "male")}
              >
                <Text>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.radioInput,
                  data.gender === "female" && styles.selectedRadio,
                ]}
                onPress={() => handleRegistrationFormInput("gender", "female")}
              >
                <Text>Female</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.radioInput,
                  data.gender === "other" && styles.selectedRadio,
                ]}
                onPress={() => handleRegistrationFormInput("gender", "other")}
              >
                <Text>Other</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.inputLabel}>Date of Birth:</Text>
            <TextInput
              style={styles.inputField}
              onChangeText={(text) => handleRegistrationFormInput("dob", text)}
              value={data.dob}
              placeholder="Enter your date of birth"
            />
            <Text style={styles.inputLabel}>Phone Number:</Text>
            <TextInput
              style={styles.inputField}
              onChangeText={(text) =>
                handleRegistrationFormInput("phoneNumber", text)
              }
              value={data.phoneNumber}
              placeholder="Enter your phone number"
              required
            />
            <Text style={styles.inputLabel}>Address:</Text>
            <TextInput
              style={styles.inputField}
              onChangeText={(text) =>
                handleRegistrationFormInput("address", text)
              }
              value={data.address}
              placeholder="Enter your address"
              required
            />
            <View style={styles.professionContainer}>
              <Text style={styles.inputLabel}>Profession:</Text>
              <Picker
                style={styles.pickerField}
                onValueChange={(itemValue) =>
                  handleRegistrationFormInput("profession", itemValue)
                }
                selectedValue={data.profession}
              >
                <Picker.Item label="Select Profession" value="" />
                <Picker.Item label="Accountant" value="accountant" />
                <Picker.Item label="Architect" value="architect" />
                <Picker.Item label="Babysitter" value="babysitter" />
                <Picker.Item label="Banker" value="banker" />
                <Picker.Item label="Barber" value="barber" />
                <Picker.Item label="Bartender" value="bartender" />
                <Picker.Item label="Bookkeeper" value="bookkeeper" />
                <Picker.Item label="Builder" value="builder" />
                <Picker.Item label="Businessman" value="businessman" />
                <Picker.Item label="Carpenter" value="carpenter" />
                <Picker.Item label="Cashier" value="cashier" />
                <Picker.Item label="Chef" value="chef" />
                <Picker.Item label="Cleaner" value="cleaner" />
                <Picker.Item label="Clerk" value="clerk" />
                <Picker.Item label="Coach" value="coach" />
                <Picker.Item
                  label="Computer Programmer"
                  value="computer programmer"
                />
                <Picker.Item label="Cook" value="cook" />
                <Picker.Item label="Dentist" value="dentist" />

                <Picker.Item label="Doctor" value="doctor" />

                <Picker.Item label="Driver" value="driver" />
                <Picker.Item label="Electrician" value="electrician" />

                <Picker.Item label="Engineer" value="engineer" />
                <Picker.Item label="Farmer" value="farmer" />
                <Picker.Item label="Fireman" value="fireman" />
                <Picker.Item label="Florist" value="florist" />
                <Picker.Item label="Hairdresser" value="hairdresser" />
                <Picker.Item label="Handyman" value="handyman" />
                <Picker.Item label="Journalist" value="journalist" />
                <Picker.Item label="Lawyer" value="lawyer" />
                <Picker.Item label="Librarian" value="librarian" />
                <Picker.Item label="Mechanic" value="mechanic" />
                <Picker.Item label="Nurse" value="nurse" />
                <Picker.Item label="Painter" value="painter" />
                <Picker.Item label="Paramedic" value="paramedic" />

                <Picker.Item label="Pharmacist" value="pharmacist" />
                <Picker.Item label="Photographer" value="photographer" />
                <Picker.Item label="Plumber" value="plumber" />

                <Picker.Item label="Police Officer" value="police officer" />

                <Picker.Item label="Professor" value="professor" />

                <Picker.Item label="Receptionist" value="receptionist" />
                <Picker.Item
                  label="Refrigeration Technician"
                  value="refrigeration technician"
                />
                <Picker.Item label="Salesperson" value="salesperson" />

                <Picker.Item label="Secretary" value="secretary" />
                <Picker.Item label="Security Guard" value="security guard" />
                <Picker.Item label="Server" value="server" />
                <Picker.Item label="Shopkeeper" value="shopkeeper" />
                <Picker.Item label="Singer" value="singer" />
                <Picker.Item label="Soldier" value="soldier" />
                <Picker.Item label="Tailor" value="tailor" />
                <Picker.Item label="Teacher" value="teacher" />
                <Picker.Item label="Technician" value="technician" />
                <Picker.Item label="Waiter" value="waiter" />
                <Picker.Item label="Waitress" value="waitress" />
                <Picker.Item label="Web Developer" value="web developer" />
                <Picker.Item label="Writer" value="writer" />
              </Picker>
            </View>
            <Text style={styles.inputLabel}>Password:</Text>
            <TextInput
              style={styles.inputField}
              onChangeText={(text) =>
                handleRegistrationFormInput("password", text)
              }
              value={data.password}
              placeholder="Enter your password"
              secureTextEntry
              required
            />
            <Text style={styles.inputLabel}>Confirm Password:</Text>
            <TextInput
              style={styles.inputField}
              onChangeText={(text) =>
                handleRegistrationFormInput("confirmPassword", text)
              }
              value={data.confirmPassword}
              placeholder="Confirm your password"
              secureTextEntry
              required
            />
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  registrationPage: {
    flex: 1,
    backgroundColor: "#fff343",
    alignItems: "left",
    justifyContent: "center",
    flexDirection: "column",
  },
  registrationContainer: {
    flex: 1,
    backgroundColor: "#ff343",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",


  },
  heading: {
    fontSize: 30,
    color: "#000",
    fontWeight: "bold",
    margin: 10,
  },
  
  leftContainer: {
    flex: 1,
    backgroundColor: "#fff343",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  rightContainer: {
    flex: 1,
    backgroundColor: "#fff343",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  registrationForm: {
    flex: 1,
    backgroundColor: "#fff343",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  inputLabel: {
    fontSize: 10,
    color: "#000",
    fontWeight: "bold",
    margin: 5,
  },
  inputField: {
    height: 30,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    margin: 4,
  },
  submitButton: {
    backgroundColor: "#000",
    padding: 10,
    margin: 15,
    height: 40,
    width: 300,
    borderRadius: 10,
  },
  submitButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  picker: {
    height: 50,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
   

  uploadContainer: {
    flex: 1,
    backgroundColor: "#fff343",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  uploadButton: {
    backgroundColor: "#000",
    padding: 10,
    margin: 15,
    height: 40,
    width: 300,
    borderRadius: 10,
  },

  pickerItem: {
    height: 50,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  

});
