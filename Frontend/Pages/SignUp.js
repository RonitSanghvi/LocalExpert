import React, {useState, useEffect} from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Styling } from '../Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';
import { createUser, updateUser } from '../Functions/auth';
import { updateUser as UPDATEUSER }  from '../Redux/User/userAction';
import { useDispatch } from 'react-redux';

export default function Signup({navigation, route}) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if there are parameters in the route, indicating an update scenario
    if (route.params) {
      const { userId, userEmail, userName, userPassword } = route.params;
      setName(userName);
      setEmail(userEmail);
      setPassword(userPassword);
      setCpassword(userPassword);
    }
  }, [route.params]);

  async function handleSubmit() {
    setLoading(true)

    // Check if all fields are given.
    if(password != "" || cpassword != "" || name != "" || email != ""){

      if(password === cpassword){

        if (route.params && route.params.userId) {
          // Update existing user profile
          await updateUser({ name, email, password }).then((res) => {
            setLoading(false);
            dispatch(UPDATEUSER(name, password));
            navigation.navigate('homePage')
            // Handle success or error in update
          });
        } else{

          await createUser({name, email, password})
          .then((res)=>{
            setLoading(false);
            setName("");
            setEmail("");
            setPassword("");
            setCpassword("");
          })
        }
      }
      else{
        console.log("Password and Confirm Password is Different")
      }
    }
    else{
      console.log("All Fields are mandatory.")
    }
  }

  return (
    <View style={Styling.container}>
      <View>
        <Text style={Styling.pageHeadingText}>Sign Up</Text>
      </View>
      <View style={Styling.horizontalLine} />

      <View style={{marginTop: 20}}>
  
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="gray" style={styles.icon} />
          <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="User Name" placeholderTextColor="gray" />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="gray" style={styles.icon} />
          <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" placeholderTextColor="gray" />
        </View>
  
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="gray" style={styles.icon} />
          <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Password" placeholderTextColor="gray" />
        </View>
  
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="gray" style={styles.icon} />
          <TextInput style={styles.input} value={cpassword} onChangeText={setCpassword} placeholder="Confirm Password" placeholderTextColor="gray" />
        </View>

      </View>
      
      <TouchableOpacity style={{marginHorizontal:40, marginVertical: 15}} onPress={handleSubmit} >
        <Text style={{fontSize: 20, color:'black', backgroundColor:'#FFC600', borderRadius: 5, padding: 5, fontWeight:'bold', textAlign:'center'}}>
          {route.params ? 'Update Profile' : 'Sign Up'}
        </Text>
      </TouchableOpacity>

      {!route.params && <View style={{flexDirection:'row', marginLeft: 40}}>
        <Text style={Styling.detailText2}>Already Have an Account ? </Text> 
        
        <TouchableOpacity onPress={() => {navigation.navigate('login')}}>
          <Text style={{...Styling.detailText2, color: '#FFC600'}}> Login </Text>
        </TouchableOpacity>
      </View>}
      
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40,
    marginBottom: 12,
  },
  icon: {
    marginRight: 10,
    flex: 1
  },
  input: {
    flex: 10,
    height: 40,
    color: 'white',
    borderBottomWidth: 1, 
    borderBottomColor: 'gray',
  },
});
