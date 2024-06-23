import {View, Text, TextInput} from 'react-native';
import React from 'react';

export default function TextInputFieldComp({
  title,
  placeholder,
  keyboard = 'default',
  security = false,
  onChangeText,
  value,
}) {
  return (
    <View>
      <Text
        style={{
          marginTop: 20,
        }}>
        {title}
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
        <TextInput
          value={value}
          keyboardType={keyboard}
          placeholder={placeholder}
          secureTextEntry={security}
          onChangeText={text => onChangeText(text)}
        />
      </View>
    </View>
  );
}
