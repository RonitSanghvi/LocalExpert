import axios from "axios"

  // Add New Destination
  export const addLocation = async ({name, countryName, stateName, cityName, description, userId, coverImageBase}) => {
    return await axios.post(
      `http://10.0.0.55:8000/adddestination`,
      {name: name, country: countryName, state: stateName, city: cityName, description: description, writer: userId, image: coverImageBase}
    )
    .then(res=>{
      console.log( "Response from Backend: ", res.data.message)
    }).catch(err=>{
      console.log( err )
    })
  };

  export const showDestination = async (id) => {
    return await axios.get(
      `http://10.0.0.55:8000/showdestination/${id}`
    )
  }

  export const allDestinations = async () => {
    return await axios.get(
      `http://10.0.0.55:8000/alldestinations`
    )
  }

  export const updateDestination = async (postbody) => {
    return await axios.post(
      'http://10.0.0.55:8000/updatedestination',
      postbody
    )
  }

  export const searchDestination = async (postbody) => {
    return await axios.post(
      'http://10.0.0.55:8000/searchDestination',
      postbody
    )
  }

  export const deleteDestination = async (id) => {
    return await axios.delete(
      `http://10.0.0.55:8000/deletedestination/${id}`
    )
  }

  export const favorites = async (postbody) => {
    return await axios.post(
      `http://10.0.0.55:8000/favorite/${postbody.id}`,
      postbody
    )
  }

