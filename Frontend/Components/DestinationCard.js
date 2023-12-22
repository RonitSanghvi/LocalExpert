import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Fort from '../assets/fort.jpg'
import { Styling } from '../Styles';
import { useNavigation } from '@react-navigation/native';

export default function DestinationCard({ name, writer, imageBase, id}) {

  const navigation = useNavigation();
  const navigateToDetails = () => {
    navigation.navigate('details', {id: id});
  };

  return (
    <TouchableOpacity onPress={navigateToDetails}>
      <View style={Styling.destinationCard}>
          <Image 
            source={imageBase ? { uri: imageBase } : Fort}
            style={{width: '100%', height: 150, borderTopLeftRadius: 5, borderTopRightRadius: 5}}
          />
          <View style={Styling.destinationCardTextView}>
              <Text style={Styling.destinnationCardMainText}>{name}</Text>
              {/* <Text style={{color:'gray', fontSize: 14}}>{writer}</Text> */}
              <Text style={{color:'gray', fontSize: 14}}>RCS</Text>
          </View>
      </View>
    </TouchableOpacity>
  )
}