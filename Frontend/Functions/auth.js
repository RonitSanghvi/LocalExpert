import axios from "axios"
import react from 'react'

  // For the SignUp page
  export const createUser = async (postbody) => {
    return await axios.post(
      `http://10.0.0.55:8000/signup`,
      {postbody}
    )
    .then(res=>{
      console.log( res.data)
    }).catch(err=>{
      console.log( err )
    })
  };

  // For the Login page
  export const loginUser = async (postbody) => {
    return await axios.post(
      `http://10.0.0.55:8000/login`,
      postbody,
    
    );
  };

  // To show user
  export const showUser = async (id) => {
    return await axios.get(
      `http://localhost:8000/showuser/${email}`
    )
  }

  // Update
  export const updateUser = async (postbody) => {
    return await axios.post(
      'http://localhost:8000/update',
      postbody
    )
  }

  // Delete
  export const deleteUser = async (id) => {
    return await axios.get(
      `http://localhost:8000/delete/${email}`
    )
  }