import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screen/home';
import SignInScreen from './src/screen/signin';
import TabScreen from './src/screen/tab';
import SignUpScreen from './src/screen/signUp';
import FormScreen from './src/screen/form';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="FormScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="FormScreen" component={FormScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="TabScreen" component={TabScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast position="top" topOffset={50} visibilityTime={2000} />
    </>
  );
}

export default App;
