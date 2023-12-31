import { SAVE_USER_DATA, LOGOUT_USER, FAVORITE, UPDATE_USER } from "./userTypes"

const initialState = {
    userId: '',
    userEmail: '',
    userName: '',
    userPassword: '',
    userFavorites: [],
    error: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SAVE_USER_DATA:
            return{
                ...state,
                userId: action.payload.userId,
                userEmail: action.payload.userEmail,
                userName: action.payload.userName,
                userPassword: action.payload.userPassword,
                userFavorites: action.payload.userFavorites
            }
        case LOGOUT_USER:
            return{
                ...state,
                userId: '',
                userEmail: '',
                userName: '',
                userPassword: '',
                userFavorites: []
            }
        case FAVORITE:
            return{
                ...state,
                userFavorites: action.payload.userFavorites
            }
        case UPDATE_USER:
            return{
                ...state,
                userName: action.payload.userName,
                userPassword: action.payload.userPassword
            }
        default: return state
    }
}

export default reducer