import React from 'react';
import {Main} from './Screens/main';
import {OTPView} from './Screens/OTPscreen';
import {SignUpDetailView} from './Screens/signUpDetail';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const GasDelivery: () => Node = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="detail" component={SignUpDetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default GasDelivery;
