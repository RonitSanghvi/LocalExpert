import React, {useState, useEffect} from 'react'
import { View, TextInput, ScrollView } from 'react-native';
import { Styling } from '../Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { searchDestination } from '../Functions/destination';

import DestinationCard from '../Components/DestinationCard';

function Search({route}) {

  const [searchText, setSearchText] = useState('');
  const [destinationResults, setDestinationResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(text){
    try {
      setLoading(true);
      const response = await searchDestination({ searchString: text });

      if (response.status) {
        setDestinationResults(response.data.data);
      } else {
        setDestinationResults([]);
      }
    } catch (error) {
      console.error('Error searching destinations:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // This useEffect will run whenever destinationResults changes. This helps to re-run the DestinationCard component when search data changes.
    console.log('Destination results updated');
  }, [destinationResults]);

  useEffect(() => {
    if (route.params && route.params.country) {
      setSearchText(route.params.country);
      handleSearch(route.params.country);
    }
  }, [route.params]);

  return (
    <View style={Styling.container}>
      <View style={{flexDirection:'row', marginVertical: 16, marginHorizontal: 15, justifyContent:'space-around', width:'90%', alignSelf:'center',  }}>
        {/* <Ionicons name='location' size={28} color="#FFC600" style={{width:'10%'}}/> */}
        <TextInput 
          placeholder='Find by Name, City or Country' 
          placeholderTextColor='grey' 
          editable 
          style={{width:'80%', borderBottomWidth: 1, borderBottomColor: '#FFC600', color:'white', fontSize:16  }}  
          underlineColorAndroid='transparent'
          value = {searchText}
          onChangeText={(text) => setSearchText(text)}
          onSubmitEditing={()=>handleSearch(searchText)}
          returnKeyType="search"
        />
        <MaterialCommunityIcons name='card-search' onPress={()=>handleSearch(searchText)} size={38} color="#FFC600"/>
      </View>

      <ScrollView style={{marginHorizontal: 30}}>
        {destinationResults && destinationResults.slice().reverse().map((destination, index) => (
          <DestinationCard
            key={index}
            id={destination._id}
            name={destination.name}
            writer={destination.writer}
            imageBase={destination.image}
          />
        ))}
      </ScrollView>

    </View>
  )
}

export default Search