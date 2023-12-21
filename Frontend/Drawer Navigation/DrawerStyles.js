import { StyleSheet} from 'react-native';

export const DrawerStyling = StyleSheet.create({

    // ========= DrawerNavigation.js ============

    // For Header
    headerBackground: {backgroundColor: '#0D0D0D' },
    headerText: {color: 'white', fontSize: 20},

    // For Drawer
    drawerBackground: {backgroundColor: '#0D0D0D' },
    drawerText: {color: 'white', fontSize: 20},
    tintColor: 'white',
    headerLogo: {height:80, width: 80},

    // ========= CustomDrawer.js ==============
    mainView: {flex:1},
    drawerMainText: {fontSize: 25, marginVertical:16, marginLeft: 16, color:'white'},
    horizontalLine: {borderBottomColor: '#FFC600', borderBottomWidth: 3, marginVertical: 10}

})