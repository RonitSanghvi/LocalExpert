import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer'
import { DrawerStyling } from './DrawerStyles'
import Logo from '../assets/LogoText.png'
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../Redux/User/userAction'
import { useNavigation } from '@react-navigation/native';

function CustomDrawer(props) {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.userId);
  const navigation = useNavigation();

  function handleLogout(){
    console.log("User Logout")
    navigation.navigate('homePage')
    dispatch(logoutUser())
  }

  return (
    <View style={DrawerStyling.mainView}>
        <View>
            {/* <Image source={Logo} style={{height: 80, width: 80, marginLeft: 15}} /> */}
            <Text style={DrawerStyling.drawerMainText}>
                Main Menu
            </Text>
            <View style={DrawerStyling.horizontalLine} />

        </View>

        <DrawerContentScrollView 
            {...props} 
            // contentContainerStyle={{backgroundColor: '#8200d6'}}
        >
            <DrawerItemList {...props}  />
        </DrawerContentScrollView>

        {userId && <TouchableOpacity style={{marginHorizontal:40, marginBottom: 35}} onPress={handleLogout}>
        <Text style={{fontSize: 20, color:'black', backgroundColor:'#FFC600', borderRadius: 5, padding: 5, fontWeight:'bold', textAlign:'center'}}>
            Log Out
        </Text>
        </TouchableOpacity>}

    </View>
  )
}

export default CustomDrawer