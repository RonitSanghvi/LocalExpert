import React, {useState} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Fort from '../assets/fort.jpg'
import { Styling } from '../Styles';
import { useNavigation } from '@react-navigation/native';
import { showDestination } from '../Functions/destination';
import { saveDestination } from '../Redux/Destination/destinationAction';
import { useDispatch } from 'react-redux';

export default function DestinationCard({ name, writer, imageBase, id}) {
  const [loading, setLoading] = useState(true);
  const [reduxLoad, setReduxLoad] = useState(false);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const navigateToDetails = () => {
    if(id){
      async function getDestination(){
          await showDestination(id)
          .then((res)=>{
            setLoading(false)
            setReduxLoad(true)
            // console.log("Got It: ", res.data.data.name)
            reduxHandler(res.data.data)
          })
      }
      getDestination()
    }
  };

  async function reduxHandler(res){
    dispatch(saveDestination(id, name, res.city, res.state, res.country, res.description, writer, imageBase ))
    navigation.navigate('details');
  }

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