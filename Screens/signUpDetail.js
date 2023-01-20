/* eslint-disable no-unused-vars */
import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';

export function SignUpDetailView() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      }}>
      <View style={{flex: 0.5, justifyContent: 'center'}}>
        <Text style={detailStyles.header}>Gas Delivery</Text>
      </View>
      <View style={{flex: 0.5, justifyContent: 'flex-start',width:'100%'}}>
        <TextInput style={detailStyles.input}>Full Name</TextInput>
        <TextInput style={detailStyles.input}>Consumer Number</TextInput>
      </View>
    </View>
  );
}

// eslint-disable-next-line no-undef
const detailStyles = StyleSheet.create({
  input: {
    margin: 5,
    padding: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'pink',
    // height: '6%',
    width: '100%',
  },
  header: {
    fontSize: 30,
  },
});
