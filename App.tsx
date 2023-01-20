import React from 'react';
import Main from './Screens/Main';
import SignUpDetailView from './Screens/signUpDetailView';
// import mapPopup from './Screens/mapPopup';
import SignupAddress from './Screens/signupAddress';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App: () => Node = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Page1" component={Main} />
        <Stack.Screen name="Page2" component={SignUpDetailView} />
        <Stack.Screen name="Page4" component={SignupAddress} />
        {/* <Stack.Screen name="Page4" component={otpPopup} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
