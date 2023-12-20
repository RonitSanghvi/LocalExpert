import React from 'react'
import { Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import { Styling } from '../Styles';
import DestinationCard from '../Components/DestinationCard';

import { useSelector } from 'react-redux';

export default function Profile({navigation}) {

  const userId = useSelector(state => state.user.userId);
  const userEmail = useSelector(state => state.user.userEmail);
  const userName = useSelector(state => state.user.userName);

  return (
    <View style={Styling.container}>
      <Text style={Styling.pageHeadingText}>Welcome {userName}</Text>

      <View style={{marginHorizontal: 15, marginBottom: 25}}>
        <Text style={Styling.detailText}>ID : {userId}</Text>
        <Text style={Styling.detailText}>Email: {userEmail}</Text>
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
