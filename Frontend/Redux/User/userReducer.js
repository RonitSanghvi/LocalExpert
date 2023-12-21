import { SAVE_USER_DATA } from "./userTypes"

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
        default: return state
    }
}

export default reducer