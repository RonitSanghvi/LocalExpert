import axios from "axios"
import { SAVE_USER_DATA } from "./userTypes"

export const saveUserData = (userId, userEmail, userName) => {
    return {
        type: SAVE_USER_DATA,
        payload: { userId, userEmail, userName }
    };
};