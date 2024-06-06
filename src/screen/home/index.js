import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation, route}) {
  const {channel, listOfFruits} = route.params;
  console.log(listOfFruits);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Screen</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{marginTop: 10, backgroundColor: 'orange', padding: 10}}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
