import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';

export default function SignInScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>SignInScreen</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Home', {
              channel: 'code with zain',
              listOfFruits: ['Apple', 'Mango'],
            })
          }
          style={{marginTop: 10, backgroundColor: 'orange', padding: 10}}>
          <Text>Go To Home Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabScreen')}
          style={{marginTop: 10, backgroundColor: 'orange', padding: 10}}>
          <Text>Go To Tab Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
