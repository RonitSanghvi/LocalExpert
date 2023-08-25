import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../Pages/SignUp';
import Login from '../Pages/LogIn';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
}