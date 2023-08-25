import React from 'react'
import { Text, View, TextInput, ScrollView } from 'react-native';
import { Styling } from '../Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DestinationCard from '../Components/DestinationCard';

function Search() {
  return (
    <View style={Styling.container}>
      <View style={{flexDirection:'row', marginVertical: 16, marginHorizontal: 15, justifyContent:'space-around', width:'90%', alignSelf:'center',  }}>
        <Ionicons name='location' size={28} color="#FFC600" style={{width:'10%'}}/>
        <TextInput placeholder='Search any Location, State or Country' placeholderTextColor='grey' editable style={{width:'80%', borderBottomWidth: 1, borderBottomColor: '#FFC600', color:'white', fontSize:16  }}  underlineColorAndroid='transparent'/>
        {/* <Ionicons name='search' size={28} color="#FFC600"/> */}
      </View>

      <ScrollView style={{marginHorizontal: 30}}>
        <DestinationCard/>
        <DestinationCard/>
        <DestinationCard/>
        <DestinationCard/>
        <DestinationCard/>
      </ScrollView>

    </View>
  )
}

export default Search