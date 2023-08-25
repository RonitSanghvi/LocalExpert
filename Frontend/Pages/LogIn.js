import React from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Styling } from '../Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

export default function Login({navigation}) {

  const CustomTextInput = ({ icon, ...rest }) => {
    return (
      <View style={styles.inputContainer}>
        <Icon name={icon} size={20} color="#999" style={styles.icon} />
        <TextInput style={styles.input} {...rest} />
      </View>
    );
  };

  return (
    <View style={Styling.container}>
        <Text style={Styling.pageHeadingText}>Login</Text>

        <View style={Styling.horizontalLine} />

        {/* Form */}
        <View style={{marginTop: 20}}>
        <CustomTextInput icon="envelope" placeholder="Email" placeholderTextColor="gray" />
        <CustomTextInput icon="lock" placeholder="Password" placeholderTextColor="gray" />
        </View>
        
        <TouchableOpacity style={{marginHorizontal:40, marginVertical: 15}}>
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
