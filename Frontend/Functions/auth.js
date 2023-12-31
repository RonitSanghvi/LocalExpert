import axios from "axios"

  // For the SignUp page
  export const createUser = async ({name, email, password}) => {
    return await axios.post(
      `http://10.0.0.55:8000/signup`,
      {name: name, email: email, password: password}
    )
    .then(res=>{
      console.log( "Response from Backend: ", res.data.message)
    }).catch(err=>{
      console.log( err )
    })
  };

  // For the Login page
  export const loginUser = async ({email, password}) => {
    return await axios.post(
      `http://10.0.0.55:8000/login`,
      {email: email, password: password},
    
    );
  };

  // To show user
  export const showUser = async (email) => {
    return await axios.get(
      `http://10.0.0.55:8000/showuser/${email}`
    )
  }

  // Update User
  export const updateUser = async (postbody) => {
    return await axios.post(
      'http://10.0.0.55:8000/update',
      postbody
    )
  }

  // Delete User
  export const deleteUser = async (id) => {
    return await axios.get(
      `http://localhost:8000/delete/${email}`
    )
  }