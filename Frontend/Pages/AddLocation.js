import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import { Styling } from '../Styles'
import DropdownMenu from '../Components/Dropdown';
import PhotoHandler from '../Components/PhotoHandler';
import { useSelector } from 'react-redux';
import { addLocation } from '../Functions/destination';

function AddLocation() {

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const [coverImage, setCoverImage] = useState(null)
  const [coverImageBase, setCoverImageBase] = useState("")

  const [country, setCountry] = useState(null);
  const [countryName, setCountryName] = useState('');
  const [state, setState] = useState(null);
  const [stateName, setStateName] = useState('');
  const [city, setCity] = useState(null);
  const [cityName, setCityName] = useState('');
  const [loading, setLoading] = useState(false);

  const userId = useSelector(state => state.user.userId);

  async function handleSubmit() {
    setLoading(true)

    // Check if all fields are given.
    if(name != "" || description != "" || city != "" || coverImageBase != ""){
      // Image base is not accepted by Mongo on backend side as its too long. -------------------------------------------
      await addLocation({name, countryName, stateName, cityName, description, userId, coverImage})
      .then((res)=>{
        setLoading(false);
        // setName("");
        // setCountry("");
        // setState("");
        // setCity("");
        // setDescription("");
        // setCoverImage("");
        // setCoverImageBase("");
        console.log("Response from backend: ", res)
      })
    }
    else{
      console.log("All Fields are mandatory.")
    }
    // console.log(`All Selected info ${name} ${city} ${cityName} ${state} ${stateName} ${country} ${countryName}`);
    // console.log(`All Selected info ${userId}`);
  }

  return (
    <ScrollView style={Styling.container}>
        <Text style={Styling.pageHeadingText}>
            Enter New Story
        </Text>

        <TextInput style={styles.input} placeholder='Location Name' placeholderTextColor="gray" value={name} onChangeText={(text)=> setName(text)} />
        <TextInput style={styles.inputTwo} multiline={true} placeholder='Description' placeholderTextColor="gray" value={description} onChangeText={(text)=> setDescription(text)} />

          
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

        <PhotoHandler setImage={setCoverImage} setImageBase={setCoverImageBase} HorizontalRatio={4} VerticalRatio={3} />
        {coverImage && <Image source={{uri: coverImage}} style={{width:"80%", height:200, marginTop: 20, marginLeft: "10%"}} /> }

        <TouchableOpacity style={{marginHorizontal:40, marginVertical: 15}} onPress={()=>{handleSubmit()}}>
            <Text style={{fontSize: 20, color:'black', backgroundColor:'#FFC600', borderRadius: 5, padding: 5, fontWeight:'bold', textAlign:'center'}}>
                SUBMIT
            </Text>
      </TouchableOpacity>

    </ScrollView>
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
    inputTwo: {
      height: 100,
      textAlignVertical:'bottom',
      marginTop: 20,
      color: 'white',
      borderWidth: 1, 
      borderColor: '#FFC600',
      fontSize: 20,
      width:'80%',
      padding:5,
      alignSelf: 'center',
    },
    input: {
      height: 40,
      color: 'white',
      borderBottomWidth: 1, 
      borderBottomColor: '#FFC600',
      fontSize: 20,
      width:'80%',
      alignSelf: 'center'
    },
  });
  
export default AddLocation