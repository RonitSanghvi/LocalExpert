import React, {useState} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import NoImage from '../assets/NoImage.png'
import { Styling } from '../Styles';
import { useNavigation } from '@react-navigation/native';
import { showDestination } from '../Functions/destination';

export default function DestinationCard({ name, country, imageBase, id}) {
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const navigateToDetails = () => {
    if(id){
      async function getDestination(){
          await showDestination(id)
          .then((res)=>{
            setLoading(false)
            navigation.navigate('details',
              {
                id: id, 
                name: name, 
                city: res.data.data.city, 
                state: res.data.data.state, 
                country: country, 
                description: res.data.data.description, 
                writer: res.data.data.writer, 
                imageBase: imageBase
              }
            );
          })
      }
      getDestination()
    }
  };

  return (
    <TouchableOpacity onPress={navigateToDetails}>
      <View style={Styling.destinationCard}>
          <Image 
            source={imageBase ? { uri: imageBase } : NoImage}
            style={Styling.destinationCardImage}
          />
          <View style={Styling.destinationCardTextView}>
              <Text style={Styling.destinnationCardMainText}>{name}</Text>
              <Text style={Styling.destinationCardCountryText}>{country}</Text>
          </View>
      </View>
    </TouchableOpacity>
  )
}