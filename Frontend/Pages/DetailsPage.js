import React, {useState, useEffect} from 'react'
import { Text, TouchableOpacity, View, ImageBackground, ScrollView } from 'react-native'
import Img from '../assets/mountain.jpg'
import Icon from 'react-native-vector-icons/Ionicons';
import { Styling } from '../Styles';
import { useSelector } from 'react-redux';

function DetailsPage({ navigation}) {

    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavoritePress = () => {
        setIsFavorite(!isFavorite);
    };
    
    const id = useSelector(state => state.destination.Id);
    const name = useSelector(state => state.destination.Name);
    const city = useSelector(state => state.destination.City);
    const country = useSelector(state => state.destination.Country);
    const description = useSelector(state => state.destination.Description);
    const image = useSelector(state=> state.destination.Image)


  return (
    <View style={{backgroundColor:'#0D0D0D', flex:1}}>
        <ScrollView>
            <View>
                <ImageBackground source={image ? { uri: image } : Img} style={{height:250}}><View style={{backgroundColor: 'rgba(0,0,0,0.4)', flex:1 }} /></ImageBackground>
            </View>

            <View style={{ position: 'relative', top: -30, left: 0, right: 0}}>
                <View style={{ backgroundColor: '#0D0D0D', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingTop: 25, paddingHorizontal: 20 }}>

                    <View style={{flexDirection: 'row', width:'100%', justifyContent:'space-between', paddingHorizontal: 5, alignContent:'center'}}>
                        <Text style={{color:'white', fontSize: 28, fontWeight:'bold'}}>{name}</Text>
                        <TouchableOpacity onPress={handleFavoritePress}>
                            <Icon name={isFavorite ? 'heart' : 'heart-outline'} fill='0' size={36} color='#FFC600' />
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row', width:'100%', marginTop: 5}}>
                        <Icon name= 'location' size={20} color='#FFC600' />
                        <Text style={{color:'white', fontSize: 20, paddingHorizontal: 6}}>{city}, {country}</Text>
                    </View>

                    <Text style={{color:'gray', fontSize: 18, marginTop: 25, fontWeight:'bold'}} >By Ronit Sanghvi</Text>

                    <Text style={{color:'rgba(255,255,255,1)', fontSize: 15, textAlign:'justify', marginTop: 10, }}> {description} </Text>

                    {/* This Button is only applicable for user's own stories */}
                    <TouchableOpacity style={{marginHorizontal: 25}}>
                        <Text style={Styling.editButton}>
                            EDIT DETAILS
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default DetailsPage