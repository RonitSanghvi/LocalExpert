import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './Drawer Navigation/DrawerNavigation';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <DrawerNavigation />
      <StatusBar style='dark' hidden  /> 
    </NavigationContainer>
  );
}

/*    
  <Tab.Navigator    
    screenOptions={({ route }) => ({
      tabBarStyle: {backgroundColor: '#794028'},
      headerTitle: "Destination",
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'ios-home' : 'ios-home-outline';
        } else if (route.name === 'Search') {
          iconName = focused ? 'ios-search' : 'ios-search-outline';
        } else if (route.name === 'Favorites') {
          iconName = focused ? 'ios-heart' : 'ios-heart-outline';
        } else if (route.name === 'SignIn') {
          iconName = focused ? 'ios-person' : 'ios-person-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'ios-apps' : 'ios-apps-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#E5E5CB',
      tabBarInactiveTintColor: '#E5E5CB',
    })}
  >
    <Tab.Screen name="Home" component={Homepage} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="SignIn" component={SignIn} />
  </Tab.Navigator> 
*/