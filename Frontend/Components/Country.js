import React from 'react'
import { ImageBackground, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Styling } from '../Styles'
import countries from './CountryList';
import countryCode from './CountryCodes';
import { useNavigation } from '@react-navigation/native';

import { MotiView } from 'moti';

export default function Country() {

  const uriLink = "https://flagcdn.com/256x192/"
  const navigation = useNavigation();
  
  // Last Component's Total Animation Time : 1200
  const motiFrom = {opacity:0}
  const motiAnimate = {opacity:1}
  const motiTrans={duration: 500, delay: 1200}

  const countryFrom = {transform: [{translateX: 300}], opacity: 0  }
  const countryAnimate = {transform: [{translateX: 0}], opacity: 1 }
  const countryTrans = {duration: 1000, type: 'timing', delay: 1700}

  function handleCountry(item){
    navigation.navigate('search', {country: item})
  }

  return (
    <MotiView
      from={motiFrom}
      animate={motiAnimate}
      transition={motiTrans}
    >
        <Text style={Styling.headingText}>Explore places around the world</Text>
        <View style={Styling.horizontalLine} />
        
        <ScrollView horizontal={true} style={Styling.countryView}>
        
          {
            countries.map((item, index)=>(

              <TouchableOpacity onPress={()=> handleCountry(item)} key={item}>
                <MotiView
                  from={countryFrom}
                  animate={countryAnimate}
                  transition={countryTrans}
                >
                  <ImageBackground source={{uri: uriLink + countryCode[index] + '.png'}} imageStyle={Styling.countryImageStyle} style={Styling.countryImage} />
                  <Text style={Styling.countryImageText}>{item}</Text>
                </MotiView>
              </TouchableOpacity>
            ))
          }
        
        </ScrollView>
    </MotiView>
  )
}
