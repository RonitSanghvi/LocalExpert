import axios from "axios"
import { SAVE_USER_DATA, LOGOUT_USER } from "./userTypes"

export const saveUserData = (userId, userEmail, userName, userPassword) => {
    return {
        type: SAVE_USER_DATA,
        payload: { userId, userEmail, userName, userPassword}
    };
};

export const logoutUser = () => {
    return{
        type: LOGOUT_USER
    }
}