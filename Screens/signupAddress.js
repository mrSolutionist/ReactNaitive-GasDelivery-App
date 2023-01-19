import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

export default function signupAddress() {
  return (
    <View>
      <View style={detailStyles.container}>
        <Text>Back</Text>
      </View>
      <View style={detailStyles.container2}>
        <TextInput style={detailStyles.input}>Address</TextInput>

        <TextInput style={detailStyles.input}>Appartment</TextInput>

        <TextInput style={detailStyles.input}>City</TextInput>

        <TextInput style={detailStyles.input}>State</TextInput>

        <TextInput style={detailStyles.input}>Zip/Postal Code</TextInput>
      </View>

      <View style={detailStyles.container3}>
        <TouchableOpacity style={detailStyles.button}>
          <Text style={detailStyles.oneText}>Add your delivery location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const detailStyles = StyleSheet.create({
  container: {
    borderWidth: 0,
    // alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '10%',
  },

  container2: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '70%',
  },

  container3: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '20%',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 24,
    width: '90%',
    fontSize: 16,
    borderRadius: 10,
    paddingLeft: 24,
  },

  button: {
    backgroundColor: '#F2515A',
    alignItems: 'center',
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    height: '50%',
  },

  oneText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
});
