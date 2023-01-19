import React from 'react';
import Main from './Screens/Main';
import SignUpDetailView from './Screens/signUpDetailView';
// import mapPopup from './Screens/mapPopup';
// import signupAddress from './Screens/signupAddress';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App: () => Node = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Page 1" component={Main} />
        <Stack.Screen name="Page 2" component={SignUpDetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
