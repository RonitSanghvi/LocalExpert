import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { Styling } from '../Styles'
import DestinationCard from './DestinationCard'
import { MotiView } from 'moti'
import { fetchDestinations } from '../Functions/fetchDestination'

export default function Destinations() {

  // Last Component's Total Animation Time : 2700
  const motiFrom = {opacity:0}
  const motiAnimate = {opacity:1}
  const motiTrans={duration: 500, delay: 2700}

  const destinationFrom = {transform: [{translateY: 300}], opacity: 0  }
  const destinationAnimate = { transform: [{translateY: 0}], opacity: 1 }
  const destinationTrans = {duration: 1000, delay: 3200, type: 'timing'}

  return (
    <MotiView
      from={motiFrom}
      animate={motiAnimate}
      transition={motiTrans}
    >
      <Text style={Styling.headingText}>Some of the best stories</Text>
      <View style={Styling.horizontalLine} />

      <MotiView
        from={destinationFrom}
        animate={destinationAnimate}
        transition={destinationTrans} 
      >

        <ScrollView style={{ marginHorizontal: 20 }}>
          {fetchDestinations((destinations) => destinations).map((destination, index) => (
            <DestinationCard key={index} name={destination.name} country={destination.country} imageBase={destination.image} id={destination._id} />
          ))}
        </ScrollView>

      </MotiView>
    </MotiView>
  )
}