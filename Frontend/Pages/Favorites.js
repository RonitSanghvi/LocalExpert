import React, {useState, useEffect} from 'react'
import { Text, View, ScrollView } from 'react-native';
import { Styling } from '../Styles';
import DestinationCard from '../Components/DestinationCard';
import { useSelector } from 'react-redux';
import { allDestinations } from '../Functions/destination';

export default function Favorites({navigation}) {

  const userFavorites = useSelector(state => state.user.userFavorites);
  console.log("Favorites: ", userFavorites)

  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await allDestinations()
      .then((res)=>{
        setLoading(false);
        setDestinations(res.data.data.filter(des => userFavorites.includes(des._id)));
      })
      .catch((err)=>{
        console.log("ERROR: ", err)
      })
    };

    fetchData();
  }, [userFavorites]);

  return (
    <View style={Styling.container}>
      <Text style={Styling.pageHeadingText}>Your Favorites</Text>
      <View style={Styling.horizontalLine} />
      
      <ScrollView style={{marginHorizontal: 30}}>
        {destinations && destinations.slice().reverse().map((destination, index) => (
              <DestinationCard key={index} name={destination.name} writer={destination.writer} imageBase={destination.image} id={destination._id}/>
        ))}
      </ScrollView>
      
    </View>
  )
}
