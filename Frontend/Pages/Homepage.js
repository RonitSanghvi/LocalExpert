import React from 'react'
import { ScrollView } from 'react-native';
import { Styling } from '../Styles';

import HomepageIntro from '../Components/HomepageIntro';
import Country from '../Components/Country';
import Destinations from '../Components/Destinations';

export default function Homepage() {
  return (
    <ScrollView style={Styling.container}>
      
      <HomepageIntro /> 
      <Country />
      <Destinations />

    </ScrollView>
  )
}
