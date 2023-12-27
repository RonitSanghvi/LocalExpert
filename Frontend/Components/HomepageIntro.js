import React from 'react'
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native'
import BGPic from '../assets/mountain.jpg'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Styling } from '../Styles';
import { useSelector } from 'react-redux';

import { MotiView } from 'moti';

export default function HomepageIntro({navigation}) {

  const motiFrom = {transform: [{translateY: 50}], opacity: 0}
  const motiAnimate = {transform: [{translateY: 0}], opacity: 1}
  const motiTransition = {duration: 1000, type: 'timing', delay: 100}

  const userId = useSelector(state => state.user.userId);
  console.log("Found ID in HomePageIntro: ", userId)

  return (
    <MotiView
      from= {motiFrom}
      animate={motiAnimate}
      transition={motiTransition}
    >
      <ImageBackground source={BGPic} resizeMode='cover'>
        <View style={Styling.homepageIntroView} >

          <Text style={Styling.headerText}>Traveling leaves you speechless, then turns you into a storyteller.....</Text>
          <Text style={Styling.detailText}>This is the platform for sharing the best time of your life. Just add your travel stories here. Share with us how you feel and experienced the location you visited. Also, get to know where others are visiting. </Text>
      
          <TouchableOpacity style={Styling.startButton} onPress={() => {userId=='' ? navigation.navigate('signup_login') : navigation.navigate('add_location')}} >
            <Text> Start Writing Now </Text>
            <Icon name="arrow-right" size={18} />
          </TouchableOpacity>
          
        </View>        
      </ImageBackground>
    </MotiView>
        
  )
}
