import React from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Styling } from '../Styles';
import DestinationCard from '../Components/DestinationCard';
import { fetchDestinations } from '../Functions/fetchDestination';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export default function Profile() {

  const userId = useSelector(state => state.user.userId);
  const userEmail = useSelector(state => state.user.userEmail);
  const userName = useSelector(state => state.user.userName);
  const userPassword = useSelector(state => state.user.userPassword);

  const navigation = useNavigation();

  const destinations = fetchDestinations(
    (destinations) => destinations.filter((des) => userId.includes(des.writer)),
    [userId]
  );

  function profileUpdate(){
    navigation.navigate(
      'signup_login',{ 
        screen: 'signup',
        params:{
          userId: userId,
          userEmail: userEmail,
          userName: userName,
          userPassword: userPassword
        }
      }
    )
  }

  return (
    <View style={Styling.container}>
      <Text style={Styling.pageHeadingText}>Welcome {userName}</Text>

      <View style={{marginHorizontal: 15, marginBottom: 25}}>
        <Text style={Styling.detailText}>ID : {userId}</Text>
        <Text style={Styling.detailText}>Email: {userEmail}</Text>
        <TouchableOpacity style={{marginHorizontal: 25}} onPress={()=> profileUpdate()} >
          <Text style={Styling.editButton}>
            EDIT PROFILE
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={Styling.pageHeadingText}>Your Stories</Text>
      <View style={Styling.horizontalLine} />

      <ScrollView style={{marginHorizontal: 15}}>
        {destinations && destinations.map((destination, index) => (
          <DestinationCard key={index} name={destination.name} writer={destination.writer} imageBase={destination.image} id={destination._id}/>
        ))}
      </ScrollView>
    </View>
  )
}
