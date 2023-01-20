import React, {useState} from 'react';
import OTPView from './OTPscreen';
// import {useNavigation} from '@react-navigation/native';
import {
  Button,
  // Modal,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export function Main({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function mainHandle() {
    // Perform login logic here
    console.log(email, password);
  }
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Gas Delivery</Text>
      </View>

      <View style={styles.inputFieldContainer}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Enter your email"
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
      
        <TouchableOpacity
          style={styles.button}
          onPress={() => mainHandle()}
          >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <Text style={{color: '#9848FF', paddingVertical: 30}}>Sign In</Text>
        <Text style={{color: 'gray'}}>Forgot your password?</Text>
      </View>
      {/* <OTPView ></OTPView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    // padding: 16,
    backgroundColor: '#B493EC',
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
    height: 55.5,
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
    color: '#fff',
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
