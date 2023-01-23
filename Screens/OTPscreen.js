/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export const OTPView = ({modalVisible, setModalVisible}) => {
  const navigation = useNavigation()
  const userExists = false;
  function navigateToNextPage(){
    if (userExists){
      // setModalVisible(false);
    }
    else{
      setModalVisible(false);
      navigation.navigate('detail')
    }
   
  }
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView1}>
        <View style={styles.modalView}>
          <Text style={styles.textStyle}>Enter OTP</Text>
          <View
            style={{
              justifyContent: 'space-between',
              alignContent: 'stretch',
              flexDirection: 'row',
              margin: 10,
            }}>
            <TextInput style={styles.otpInput}> </TextInput>
            <TextInput style={styles.otpInput}> </TextInput>
            <TextInput style={styles.otpInput}> </TextInput>
            <TextInput style={styles.otpInput}> </TextInput>
          </View>

          <TouchableOpacity
            style={[styles.button]}
            onPress={() =>navigateToNextPage()}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              Verify
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  otpInput: {
    height: 48,
    width: 48,
    borderColor: '#B3B3B3',
    borderWidth: 1,
    margin: 10,
    borderRadius: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  centeredView1: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    flex: 0.5,
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
  },
  button: {
    backgroundColor: '#F2515A',
    borderColor: '#F2515A',
    borderWidth: 1,
    borderRadius: 15,
    width: '100%',
    height: 55.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonOpen: {
    backgroundColor: '#F2515A',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: '#F2515A',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default OTPView;
