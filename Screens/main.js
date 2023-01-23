/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import OTPView from './OTPscreen';
// import {useNavigation} from '@react-navigation/native';
import {
  // Button,
  // Modal,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';

export function Main() {
  const [number, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(true);

  function otpLogin() {
    if (number.length == 10){
      setModalVisible(true);
      console.log('dsdfeere');
    }
    
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Gas Delivery</Text>
      </View>

      <View style={styles.inputFieldContainer}>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={text => setPhoneNumber(text)}
          placeholder="Enter your phone umber"
          autoCapitalize="none"
          keyboardType="default"
        />
        <Pressable style={styles.button} onPress={otpLogin}>
          <Text>login</Text>
        </Pressable>
        <Text style={{color: '#9848FF', paddingVertical: 30}}>Sign In</Text>

        <Text style={{color: 'gray'}}>Forgot your password?</Text>
      </View>

      <OTPView modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    // padding: 16,
    backgroundColor: '#F2515A',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    paddingVertical: 10,
    // height: 55.5,
    width: '100%',
    fontSize: 16,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#9848FF',
    padding: 12,
    alignItems: 'center',
    height: 55.5,
    width: '100%',
    borderRadius: 12,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  headerText: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
    alignItems: 'space-between',
    justifyContent: 'flex-start',
  },
  inputFieldContainer: {
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    width: '100%',
    padding: 16,
    backgroundColor: 'white',
    // paddingVertical: 50,
  },
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    width: '100%',
    padding: 16,
    // backgroundColor: 'black',
    // paddingVertical: 50,
  },
});

export default Main;
