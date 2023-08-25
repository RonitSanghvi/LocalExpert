import React from 'react'
import { Text, View, ScrollView } from 'react-native';
import { Styling } from '../Styles';
import DestinationCard from '../Components/DestinationCard';

export default function Favorites({navigation}) {
  return (
    <View style={Styling.container}>
      <Text style={Styling.pageHeadingText}>Your Favorites</Text>
      <View style={Styling.horizontalLine} />
      
      <ScrollView style={{marginHorizontal: 30}}>
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
      </ScrollView>
      
    </View>
  )
}
