import { SAVE_USER_DATA, LOGOUT_USER } from "./userTypes"

const initialState = {
    userId: '',
    userEmail: '',
    userName: '',
    userPassword: '',
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
                userPassword: action.payload.userPassword
            }
        case LOGOUT_USER:
            return{
                ...state,
                userId: '',
                userEmail: '',
                userName: '',
                userPassword: ''
            }
        default: return state
    }
}

export default reducer