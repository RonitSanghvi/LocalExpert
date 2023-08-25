import React from 'react'
import { Image, Text, View } from 'react-native'
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer'
import { DrawerStyling } from './DrawerStyles'
import Logo from '../assets/LogoText.png'

function CustomDrawer(props) {
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
    </View>
  )
}

export default CustomDrawer