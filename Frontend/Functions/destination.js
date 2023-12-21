import axios from "axios"
// Favorite Destination left

  export const addLocation = async ({name, countryName, stateName, cityName, description, userId, coverImage}) => {
    return await axios.post(
      `http://10.0.0.55:8000/adddestination`,
      {name: name, country: countryName, state: stateName, city: cityName, description: description, writer: userId, image: coverImage}
    )
    .then(res=>{
      console.log( "Response from Backend: ", res.data.message)
    }).catch(err=>{
      console.log( err )
    })
  };

  // To show One Destination
  export const showDestination = async (id) => {
    return await axios.get(
      `http://localhost:8000/showdestination/:_id`
    )
  }

  // To show All Destinations
  export const showDestinations = async (id) => {
    return await axios.get(
      `http://localhost:8000/alldestinations`
    )
  }

  // Update Destination
  export const updateDestination = async (postbody) => {
    return await axios.post(
      'http://localhost:8000/updatedestination',
      postbody
    )
  }

  // Delete destination
  export const deleteDestination = async (id) => {
    return await axios.get(
      `http://localhost:8000/deletedestination/:_id`
    )
  }