import React, {useEffect, useState} from 'react'
import { ScrollView, View, Text } from 'react-native'
import { Styling } from '../Styles'
import DestinationCard from './DestinationCard'
import { MotiView } from 'moti'
import { allDestinations } from '../Functions/destination'

export default function Destinations() {

  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await allDestinations()
      .then((res)=>{
        setLoading(false);
        console.log("Res: ", res.data.status_code)
        setDestinations(res.data.data);
      })
      .catch((err)=>{
        console.log("ERROR: ", err)
      })
    };

    fetchData();
  }, []);

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

        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <ScrollView style={{ marginHorizontal: 20 }}>
            {destinations.map((destination, index) => (
              <DestinationCard key={index} name={destination.name} writer={destination.writer} imageBase={destination.image} id={destination._id}/>
            ))}
          </ScrollView>
        )}

      </MotiView>

    </MotiView>
  )
}