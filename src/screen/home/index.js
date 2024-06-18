import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {toastShow} from '../../config/toast';

export default function HomeScreen({navigation, route}) {
  function showToast() {
    toastShow('success', 'sign in successfully', 'welcome to the app');
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Screen</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{marginTop: 10, backgroundColor: 'orange', padding: 10}}>
          <Text>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => showToast()}
          style={{marginTop: 10, backgroundColor: 'orange', padding: 10}}>
          <Text>Show toast</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
