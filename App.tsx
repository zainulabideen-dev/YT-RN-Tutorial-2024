import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screen/home';
import SignInScreen from './src/screen/signin';
import TabScreen from './src/screen/tab';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SignInScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="TabScreen" component={TabScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
