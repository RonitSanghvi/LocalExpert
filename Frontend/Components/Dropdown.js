import React, {useEffect, useState} from 'react';
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Dropdown} from 'react-native-element-dropdown';
import { Country, State, City }  from 'country-state-city';

export default function DropdownMenu({onCountryChange, onStateChange, onCityChange}) {

  const [countryData, setCountryData] = useState([]);   // All Countries
  const [country, setCountry] = useState(null);         // Selected Country Code
  const [countryName, setCountryName] = useState();     // Selected Country Name

  const [stateData, setStateData] = useState([]);       // States of selected Country 
  const [state, setState] = useState(null);             // Selected State Code
  const [stateName, setStateName] = useState();         // Selected State Name

  const [cityData, setCityData] = useState([]);       // City of selected Country 
  const [city, setCity] = useState(null);             // Selected City Code
  const [cityName, setCityName] = useState();         // Selected City Name


  const [isFocus, setIsFocus] = useState(false);

  useEffect(()=> {
    setCountryData(Country.getAllCountries().map((
      { isoCode, name }) => ({ label: name, value: isoCode }
    ))) 
  },[])

  const handleState = (countryCode) => {
    setStateData(State.getStatesOfCountry(countryCode).map((
      {name, isoCode})=> ({label: name, value: isoCode}
    )));
  }

  const handleCity = (countryCode, stateCode) => {
    setCityData(City.getCitiesOfState(countryCode, stateCode).map((
      {name}) => ({label: name, value: name}
    )))
  }

  return (
    <View>
      <View style={{ padding: 20, borderRadius: 15, paddingHorizontal: 44}}>
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'white'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={countryData} 
          search 
          maxHeight={300}
          labelField="label" 
          valueField="value"
          placeholder={!isFocus ? 'Select country' : '...'}
          searchPlaceholder="Search..."
          value={country}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setCountry(item.value);
            handleState(item.value)
            setCountryName(item.label)
            setIsFocus(false);        
            onCountryChange(item.value, item.label);    
          }}
        />
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'white'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={stateData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select state' : '...'}
          searchPlaceholder="Search..."
          value={state}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setState(item.value);
            setIsFocus(false);
            setStateName(item.label)
            handleCity(country, item.value)
            onStateChange(item.value, item.label);
          }}
        />
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={cityData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select city' : '...'}
          searchPlaceholder="Search..."
          value={city}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setCity(item.value);
            setCityName(item.label);
            setIsFocus(false);
            onCityChange(item.value, item.label);
          }} 
        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 40,
    borderColor: '#FFC600',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'white'
  },
  selectedTextStyle: {
    color: 'white',
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: 'white'
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    // color: 'white'
  },
});