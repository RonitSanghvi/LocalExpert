import React, { useState, useEffect } from 'react';
import { Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function PhotoHandler({ setImage, setImageBase, HorizontalRatio, VerticalRatio }) {

  const [hasGalleryPermission, setHasGalleryPermission]= useState(null)

    useEffect(()=>{
        (async ()=>{
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === "granted");
        })();
    }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [HorizontalRatio, VerticalRatio],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      try {
        const response = await fetch(result.assets[0].uri);
        const blob = await response.blob();
        const base64String = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve(reader.result);
          };
          reader.onerror = (error) => {
            reject(error);
          };
          reader.readAsDataURL(blob);
        });
        setImageBase(base64String);
      } catch (error) {
        console.log('Error converting image to base64:', error);
      }
    }
  };

  if(hasGalleryPermission === false){
    return <Text>No Access To Gallery</Text>
  }

  return (
    <>
      <Button title="Pick Image" onPress={()=>pickImage()} />
    </>
  );
}

export default PhotoHandler;