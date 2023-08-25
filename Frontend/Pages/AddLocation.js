import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Styling } from '../Styles'
import DropdownMenu from '../Components/Dropdown';


function AddLocation() {

    const CustomTextInput = ({ icon, ...rest }) => {
        return (
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} {...rest} />
          </View>
        );
    };

  return (
    <View style={Styling.container}>
        <Text style={Styling.pageHeadingText}>
            Enter New Story
        </Text>

        <CustomTextInput placeholder="Location Name" placeholderTextColor="gray"/>
        
        
        <DropdownMenu />

        <TouchableOpacity style={{marginHorizontal:40, marginVertical: 15}}>
            <Text style={{fontSize: 20, color:'black', backgroundColor:'#FFC600', borderRadius: 5, padding: 5, fontWeight:'bold', textAlign:'center'}}>
                SUBMIT
            </Text>
      </TouchableOpacity>

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
      borderBottomColor: '#FFC600',
      fontSize: 20
    },
  });
  
export default AddLocation