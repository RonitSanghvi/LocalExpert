import React, {useState, useEffect} from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button } from 'react-native'
import { Styling } from '../Styles'
import DropdownMenu from '../Components/Dropdown';
import PhotoHandler from '../Components/PhotoHandler';
import * as ImagePicker from 'expo-image-picker'

function AddLocation() {

  // const [hasGalleryPermission, setHasGalleryPermission]= useState(null)
  const [image, setImage] = useState(null)
  const [imageBase, setImageBase] = useState("")

  const [country, setCountry] = useState(null);
  const [countryName, setCountryName] = useState('');
  const [state, setState] = useState(null);
  const [stateName, setStateName] = useState('');
  const [city, setCity] = useState(null);
  const [cityName, setCityName] = useState('');

  const CustomTextInput = ({ icon, ...rest }) => {
      return (
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} {...rest} />
        </View>
      );
  };

  function handleSubmit() {
    console.log(`All Selected info ${city} ${cityName} ${state} ${stateName} ${country} ${countryName} and Image: ${image}`);
  }

  return (
    <View style={Styling.container}>
        <Text style={Styling.pageHeadingText}>
            Enter New Story
        </Text>

        <CustomTextInput placeholder="Location Name" placeholderTextColor="gray"/>
          
        <DropdownMenu 
          onCountryChange={(selectedCountry, selectedCountryName) => {
            setCountry(selectedCountry);
            setCountryName(selectedCountryName);
          }}
          onStateChange={(selectedState, selectedStateName) => {
            setState(selectedState);
            setStateName(selectedStateName);
          }}
          onCityChange={(selectedCity, selectedCityName) => {
            setCity(selectedCity);
            setCityName(selectedCityName);
          }}
        />

        <PhotoHandler setImage={setImage} setImageBase={setImageBase} />
        {image && <Image source={{uri: image}} style={{width:"95%", height: "25%", margin: 10}} /> }

        <TouchableOpacity style={{marginHorizontal:40, marginVertical: 15}} onPress={()=>{handleSubmit()}}>
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