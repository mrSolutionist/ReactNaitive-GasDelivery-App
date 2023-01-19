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
        <View style={detailStyles.container21}>
        </View>
      </View>

      <View style={detailStyles.container3}>
        <TouchableOpacity style={detailStyles.button}>
          <Text style={detailStyles.oneText}>Confirm Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const detailStyles = StyleSheet.create({

  container: {
    borderWidth: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '10%',
  },

  container2: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '70%',
  },

  container21: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '70%',
    borderRadius: 20,
  },


  container3: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '20%',
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
    
