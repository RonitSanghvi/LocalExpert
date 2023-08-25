import React from 'react'
import { Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import { Styling } from '../Styles';
import DestinationCard from '../Components/DestinationCard';

export default function Profile({navigation}) {
  return (
    <View style={Styling.container}>
      <Text style={Styling.pageHeadingText}>Welcome Ronit Sanghvi</Text>

      <View style={{marginHorizontal: 15, marginBottom: 25}}>
        <Text style={Styling.detailText}>ID : 200543133</Text>
        <Text style={Styling.detailText}>Email: ronitsanghvi2000@gmail.com</Text>
        <Text style={Styling.detailText}>Password: 12345678</Text>
        <TouchableOpacity style={{marginHorizontal: 25}}>
          <Text style={Styling.editButton}>
            EDIT PROFILE
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={Styling.pageHeadingText}>Your Stories</Text>
      <View style={Styling.horizontalLine} />

      <ScrollView style={{marginHorizontal: 15}}>
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
      </ScrollView>
    </View>
  )
}
