import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './Drawer Navigation/DrawerNavigation';

// Redux Store Setup
import store from './Redux/Store';        
import {Provider} from 'react-redux'   

// Short Message Setup
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigation />
        <StatusBar style='dark' hidden  /> 
        <Toast />
      </NavigationContainer>
    </Provider>
  );
}