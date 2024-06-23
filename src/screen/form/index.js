import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import TextInputFieldComp from '../../components/TextInputFieldComp';
import DocumentPicker from 'react-native-document-picker';

export default function FormScreen() {
  const [firstName, setFirstName] = useState();
  const [image, setImage] = useState();

  console.log(image);
  async function openGallery() {
    const docs = await DocumentPicker.pick({
      type: DocumentPicker.types.images,
      allowMultiSelection: false,
    }).catch(error => {});
    if (!docs) return;
    if (docs.length == 0) return;
    setImage(docs[0]);
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => openGallery()}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderColor: 'black',
                borderWidth: 1,
              }}
              source={
                image == undefined
                  ? require('../../assets/image/man.png')
                  : {uri: image?.uri}
              }
            />
          </TouchableOpacity>
        </View>
        <TextInputFieldComp
          title={'First Name'}
          placeholder={'first name'}
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
      </View>
    </SafeAreaView>
  );
}
