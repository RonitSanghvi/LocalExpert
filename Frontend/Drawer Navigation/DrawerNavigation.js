import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import { Image } from 'react-native';
import Logo from '../assets/Logo.png'

// Styling
import { DrawerStyling } from './DrawerStyles';

// Pages of Application
import Homepage from '../Pages/Homepage';
import Favorites from '../Pages/Favorites';
import Search from '../Pages/Search';
import Profile from '../Pages/Profile';
import DetailsPage from '../Pages/DetailsPage';
import AddLocation from '../Pages/AddLocation';
import StackNavigation from '../Stack Navigation/StackNavigation';  // For SignUp and Login Page Navigation 

import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {

    const userId = useSelector(state => state.user.userId);

    return (
        <Drawer.Navigator
            
            screenOptions={({ route }) => ({
                
                // Drawer Options
                drawerStyle: DrawerStyling.drawerBackground ,
                drawerLabelStyle: DrawerStyling.headerText,

                // Header Options
                headerTitle: 'Local Expert',
                headerShown: true,
                headerStyle: DrawerStyling.headerBackground,
                headerTitleStyle: DrawerStyling.drawerText,
                headerTintColor: DrawerStyling.tintColor,
                headerRight: () => (
                    <Image source={Logo} style={DrawerStyling.headerLogo} />
                ),
            })}

            drawerContent= {props => <CustomDrawer {...props} /> }

        >
            <Drawer.Screen 
                name='homePage' 
                component={Homepage}  
                options={{title: 'Home'}}
            />
            <Drawer.Screen
                name='search'
                component={Search}
                options={{title: 'Search'}}
            />
            <Drawer.Screen
                name='signup_login'
                component={StackNavigation}
                options={{title: 'SignUp / Login', drawerItemStyle: userId && {display:'none'}}}
            />
            <Drawer.Screen
                name='favorites'
                component={Favorites}
                options={{title: 'Favorites', drawerItemStyle: !userId && {display:'none'}}}
            />
            <Drawer.Screen
                name='profile'
                component={Profile}
                options={{title: 'Profile', drawerItemStyle: !userId && {display:'none'}}}
            />
            <Drawer.Screen
                name='details'
                component={DetailsPage}
                options={{title: 'Details', drawerItemStyle: {display: 'none'}}}
            />
            <Drawer.Screen
                name='add_location'
                component={AddLocation}
                options={{title: 'Add Location', drawerItemStyle: !userId && {display:'none'}}}
            />
        </Drawer.Navigator>
    )
}
