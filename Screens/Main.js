import { NavigationHelpersContext } from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Main({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const usermail = "jondoe@gmail.com";
  const userpassword = "jondoe123";

  function handleLogin() {
    if (email === usermail && password === userpassword) {
      navigation.navigate('Page2')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.container3}>
        <Text style={styles.oneText}>Gas Delivery</Text>
      </View>
      <View style={styles.container2}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Enter your Username"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        {/* <Text style={styles.label}>Password</Text> */}
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <Text style={{color: '#F2515A', paddingVertical: 20}}>Sign In</Text>
        <Text>Forgot your password?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#F2515A',
    // padding: 16
  },

  container2: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    // position: 'absolute',
    // bottom: 0,
    // paddingTop: 40,
  },
  container3: {
    height: '40%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    // padding: 8,
    marginBottom: 16,
    width: '100%',
    fontSize: 16,
    borderRadius: 10,
    paddingLeft: 24,
    // paddingTop: 18,
    // paddingBottom: 18,
    // marginTop: 20,
    // marginVertical: 24,
    height: '18%',
  },
  button: {
    backgroundColor: '#F2515A',
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
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  oneText: {
    fontSize: 40,
    fontWeight: '700',
    // padding: 50,
    color: 'white',
    // position: 'absolute',
    // top: 40,
  },
});

export default Main;
