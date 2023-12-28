import React from 'react'
import { Text, View, ScrollView } from 'react-native';
import { Styling } from '../Styles';
import DestinationCard from '../Components/DestinationCard';
import { useSelector } from 'react-redux';
import { fetchDestinations } from '../Functions/fetchDestination';

export default function Favorites() {

  const userFavorites = useSelector(state => state.user.userFavorites);

  const destinations = fetchDestinations(
    (destinations) => destinations.filter((des) => userFavorites.includes(des._id)),
    [userFavorites]
  );

  return (
    <View style={Styling.container}>
      <Text style={Styling.pageHeadingText}>Your Favorites</Text>
      <View style={Styling.horizontalLine} />
      
      <ScrollView style={{marginHorizontal: 30}}>
        {destinations && destinations.map((destination, index) => (
          <DestinationCard key={index} name={destination.name} writer={destination.writer} imageBase={destination.image} id={destination._id}/>
        ))}
      </ScrollView>
      
    </View>
  )
}
