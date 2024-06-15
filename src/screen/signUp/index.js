import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';
import React from 'react';

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
        <View>
          <Text
            style={{
              marginTop: 20,
            }}>
            Name
          </Text>
          <View
            style={{
              backgroundColor: '#E5E8E8',
              height: 40,
              justifyContent: 'center',
              paddingHorizontal: 15,
              marginTop: 3,
              borderRadius: 5,
            }}>
            <TextInput placeholder="user name" />
          </View>
        </View>
        <View>
          <Text
            style={{
              marginTop: 20,
            }}>
            Email
          </Text>
          <View
            style={{
              backgroundColor: '#E5E8E8',
              height: 40,
              justifyContent: 'center',
              paddingHorizontal: 15,
              marginTop: 3,
              borderRadius: 5,
            }}>
            <TextInput placeholder="email" keyboardType="email-address" />
          </View>
        </View>
        <View>
          <Text
            style={{
              marginTop: 20,
            }}>
            Password
          </Text>
          <View
            style={{
              backgroundColor: '#E5E8E8',
              height: 40,
              justifyContent: 'center',
              paddingHorizontal: 15,
              marginTop: 3,
              borderRadius: 5,
            }}>
            <TextInput placeholder="password" secureTextEntry />
          </View>
        </View>
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
