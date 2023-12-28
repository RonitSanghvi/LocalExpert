import React, {useState} from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Styling } from '../Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';
import { loginUser } from '../Functions/auth';
import { saveUserData } from '../Redux/User/userAction';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';


export default function Login({navigation}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setID] = useState("")
  const [name, setName] = useState("")

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const showToast = (name) => {
    Toast.show({
      type: 'success',
      text1: '👋 Hello '+ name,
      text2: 'Login Success'
    });
  }

  async function handleSubmit(){
    setLoading(true)

    if(email != "" || password != ""){

      await loginUser({email, password})
      .then((res)=>{
        setLoading(false)
        if(res.data.status_code == 200){
          setID(res.data.data.user._id)
          setName(res.data.data.user.name)
          console.log("Res: ", res.data.message)
          // Redux Dispatch Method
          dispatch(saveUserData(res.data.data.user._id, email, res.data.data.user.name, password, res.data.data.user.favorites));
          showToast(res.data.data.user.name)
          navigation.navigate('homePage')
        }
        else
        {
          console.log("Res: ", res.data.message)
        }
      })

    }
    else{
      console.log("All Fields are mandatory.")
    }
  }

  return (
    <View style={Styling.container}>
        <Text style={Styling.pageHeadingText}>Login</Text>

        <View style={Styling.horizontalLine} />

        <View style={{marginTop: 20}}>
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="gray" style={styles.icon} />
          <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" placeholderTextColor="gray" />
        </View>
  
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="gray" style={styles.icon} />
          <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Password" placeholderTextColor="gray" />
        </View>
        </View>
        
        <TouchableOpacity style={{marginHorizontal:40, marginVertical: 15}} onPress={handleSubmit}>
        <Text style={{fontSize: 20, color:'black', backgroundColor:'#FFC600', borderRadius: 5, padding: 5, fontWeight:'bold', textAlign:'center'}}>
            Log In
        </Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row', marginLeft: 40}}>
        <Text style={Styling.detailText2}>New User ? </Text> 
        
        <TouchableOpacity onPress={() => {navigation.navigate('signup')}}>
          <Text style={{...Styling.detailText2, color: '#FFC600'}}> Signup </Text>
        </TouchableOpacity>
      </View>
      
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
