import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const professions = ['Doctor', 'Plumber', 'Teacher', 'Engineer', 'Chef'];

export default function RegistrationForm() {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [profession, setProfession] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    // handle registration logic here
    console.log('Full Name:', fullName);
    console.log('Address:', address);
    console.log('Contact Number:', contactNumber);
    console.log('Password:', password);
    console.log('Profession:', profession);
    console.log('Email:', email);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={(text) => setFullName(text)}
        value={fullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        onChangeText={(text) => setAddress(text)}
        value={address}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        onChangeText={(text) => setContactNumber(text)}
        value={contactNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      
      <Text style={styles.professionText}>Choose your profession:</Text>
      <Picker
        style={styles.picker}
        selectedValue={profession}
        onValueChange={(itemValue, itemIndex) => setProfession(itemValue)}>
        {professions.map((item, index) => (
          <Picker.Item key={index} label={item} value={item} />
        ))}
      </Picker>
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  professionText: {
    marginVertical: 10,
    fontWeight: 'bold',
  },
  picker: {
    width: '100%',
    height: 50,
    marginBottom: 10,
  },
});
