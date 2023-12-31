import React, {useState, useEffect} from 'react'
import { Text, TouchableOpacity, View, ImageBackground, ScrollView } from 'react-native'
import Img from '../assets/mountain.jpg'
import Icon from 'react-native-vector-icons/Ionicons';
import { Styling } from '../Styles';
import { useSelector } from 'react-redux';
import {favorites} from '../Functions/destination'
import { deleteDestination } from '../Functions/destination';
import { useNavigation } from '@react-navigation/native';
import { showUser } from '../Functions/auth';
import { favoriteHandler } from '../Redux/User/userAction';
import { useDispatch } from 'react-redux';

function DetailsPage({route}) {

    const [isFavorite, setIsFavorite] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const { id, name, city, state, country, description, writer, imageBase } = route.params;
    
    const userEmail = useSelector(state => state.user.userEmail)
    const userFavorites = useSelector(state => state.user.userFavorites)
    const userId = useSelector(state => state.user.userId)


    async function handleFavoritePress() {
        await favorites({id:id, email:userEmail})
        .then(()=> updateRedux())
        setIsFavorite(!isFavorite);
    };

    async function updateRedux(){
        await showUser(userEmail)
        .then((res)=>dispatch(favoriteHandler(res.data.data.favorites)))
    }

    useEffect(() => {
        setIsFavorite(userFavorites.includes(id));
    }, [userFavorites, id]);

    async function handleDelete(){
        await deleteDestination(id)
        .then(()=> navigation.navigate('homePage'))
    }

  return (
    <View style={{backgroundColor:'#0D0D0D', flex:1}}>
        <ScrollView>
            <View>
                <ImageBackground source={imageBase ? { uri: imageBase } : Img} style={{height:250}}><View style={{backgroundColor: 'rgba(0,0,0,0.4)', flex:1 }} /></ImageBackground>
            </View>

            <View style={{ position: 'relative', top: -30, left: 0, right: 0}}>
                <View style={{ backgroundColor: '#0D0D0D', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingTop: 25, paddingHorizontal: 20 }}>

                    <View style={{flexDirection: 'row', width:'100%', justifyContent:'space-between', paddingHorizontal: 5, alignContent:'center'}}>
                        <Text style={{color:'white', fontSize: 28, fontWeight:'bold'}}>{name}</Text>
                        {userEmail && <TouchableOpacity onPress={handleFavoritePress}>
                            <Icon name={isFavorite ? 'heart' : 'heart-outline'} fill='0' size={36} color='#FFC600' />
                        </TouchableOpacity>
                        }
                    </View>

                    <View style={{flexDirection: 'row', width:'100%', marginTop: 5}}>
                        <Icon name= 'location' size={20} color='#FFC600' />
                        <Text style={{color:'white', fontSize: 20, paddingHorizontal: 6}}>{city}, {country}</Text>
                    </View>

                    {/* <Text style={{color:'gray', fontSize: 18, marginTop: 25, fontWeight:'bold'}} >By Ronit Sanghvi</Text> */}

                    <Text style={{color:'rgba(255,255,255,1)', fontSize: 15, textAlign:'justify', marginTop: 10, }}> {description} </Text>

                    {/* This Button is only applicable for user's own stories */}
                    {writer == userId && <TouchableOpacity style={{marginHorizontal: 25}} onPress={()=> handleDelete()}>
                        <Text style={Styling.editButton}>
                            DELETE LOCATION
                        </Text>
                    </TouchableOpacity>}
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default DetailsPage