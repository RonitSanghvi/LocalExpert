import React, {useState, useEffect} from 'react'
import { View, TextInput, ScrollView } from 'react-native';
import { Styling } from '../Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { searchDestination } from '../Functions/destination';

// import { showDestination } from '../Functions/destination';

import DestinationCard from '../Components/DestinationCard';

function Search() {

  const [searchText, setSearchText] = useState('');
  const [destinationResults, setDestinationResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(){
    try {
      setLoading(true);
      const response = await searchDestination({ searchString: searchText });

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
    // This useEffect will run whenever destinationResults changes
    console.log('Destination results updated');
  }, [destinationResults]);


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
          
        />
        <MaterialCommunityIcons name='card-search' onPress={handleSearch} size={38} color="#FFC600"/>
      </View>

      <ScrollView style={{marginHorizontal: 30}}>
        {destinationResults.map((destination, index) => (
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