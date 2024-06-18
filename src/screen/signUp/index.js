import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';
import React from 'react';
import TextInputFieldComp from '../../components/TextInputFieldComp';

export default function SignUpScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View
            style={{
              width: 80,
              height: 80,
              backgroundColor: 'orange',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 40,
            }}>
            <Image
              style={{
                width: 50,
                height: 50,
              }}
              source={require('../../assets/image/man.png')}
            />
          </View>
        </View>
        <Text
          style={{
            marginTop: 20,
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 17,
          }}>
          Signup to join
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#CCD1D1',
              paddingHorizontal: 20,
              paddingVertical: 8,
              justifyContent: 'center',
              alignItems: 'center',
              flex: 0.3,
            }}>
            <Image
              style={{
                width: 25,
                height: 25,
              }}
              source={require('../../assets/image/google.png')}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#CCD1D1',
              paddingHorizontal: 20,
              paddingVertical: 8,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 5,
              flex: 0.3,
            }}>
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require('../../assets/image/facebook.png')}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#CCD1D1',
              paddingHorizontal: 20,
              paddingVertical: 8,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 5,
              flex: 0.3,
            }}>
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require('../../assets/image/apple.png')}
            />
          </View>
        </View>
        <Text
          style={{
            marginTop: 20,
            textAlign: 'center',
            fontSize: 17,
          }}>
          Or register with email
        </Text>
        <TextInputFieldComp
          title={'Name'}
          placeholder={'user name'}
          onChangeText={text => console.log(text)}
        />
        <TextInputFieldComp
          title={'Email'}
          placeholder={'email'}
          keyboard="email-address"
        />
        <TextInputFieldComp
          title={'Password'}
          placeholder={'password'}
          security={true}
        />
        <View
          style={{
            backgroundColor: '#52BE80',
            padding: 10,
            borderRadius: 20,
            marginTop: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
            }}>
            Sign Up
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'center',
          }}>
          <Text>Already have an account?</Text>
          <Text
            style={{
              marginLeft: 5,
              color: '#52BE80',
              textDecorationLine: 'underline',
            }}>
            Sign in
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
