/* eslint-disable prettier/prettier */
import React from 'react';
import {TextInput, View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function SignUpDetailView() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={detailStyles.container}>
        <Text style={detailStyles.oneText}>Gas Delivery</Text></View>
      <View style={detailStyles.container2}><TextInput style={detailStyles.input}>Full Name</TextInput>
      <TextInput style={detailStyles.input}>Consumer Number</TextInput>
      </View>
      <View style={detailStyles.container3}>
      <TouchableOpacity style={detailStyles.button} onPress={SignUpDetailView}>
          <Text style={detailStyles.oneText2}>Add your delivery location</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}

const detailStyles = StyleSheet.create({
  container: {
    // borderColor: 'blue',
    // borderWidth: 1,
    width: '100%',
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#F2515A',
  },

  container2: {
    // borderColor: 'blue',
    // borderWidth: 1,
    width: '100%',
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container3: {
    // borderColor: 'blue',
    // borderWidth: 1,
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
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
    height: '30%',
  },

  oneText: {
    fontSize: 40,
    fontWeight: '700',
    color: '#F2515A',
  },

  oneText2: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },

});
