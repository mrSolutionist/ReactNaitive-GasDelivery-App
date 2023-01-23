import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from 'react-native';

export const OtpPopup = ({modalVisible, setModalVisible}) => {
  // const [modalVisible, setModalVisible] = useState(true);
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalViewmain}>
        <View style={styles.modalView}>
          <Text style={styles.oneText}>Enter OTP</Text>
          <View style={styles.inputview}>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
          </View>
          <Pressable
            style={[styles.button1, styles.buttonClose]}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
          <Text style={styles.modalText}>Resent OTP</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    // justifyContent: 'flex-end',
  },
  modalViewmain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    justifyContent: 'flex-end',
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 35,
    alignItems: 'center',
    // justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: '50%',
  },
  button: {
    // backgroundColor: '#F2515A',
    // padding: 12,
    alignItems: 'center',
    width: '50%',
    borderRadius: 10,
    justifyContent: 'center',
    // paddingTop: 18,
    // paddingBottom: 18,
    // marginTop: 10,
    height: '10%',
  },
  button1: {
    // backgroundColor: '#F2515A',
    // padding: 12,
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    // paddingTop: 18,
    // paddingBottom: 18,
    // marginTop: 10,
    height: '18%',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#F2515A',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  oneText: {
    fontSize: 40,
    fontWeight: '700',
    // padding: 50,
    color: '#F2515A',
    // position: 'absolute',
    // top: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    width: '15%',
    margin: 22,
    borderRadius: 10,
  },
  inputview: {
    // borderWidth: 1,
    // borderColor: '#ccc',
    // textAlign: 'center',
    width: '100%',
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default OtpPopup;
