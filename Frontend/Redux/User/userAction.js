import axios from "axios"
import { SAVE_USER_DATA, LOGOUT_USER, FAVORITE, UPDATE_USER } from "./userTypes"

export const saveUserData = (userId, userEmail, userName, userPassword, userFavorites) => {
    return {
        type: SAVE_USER_DATA,
        payload: { userId, userEmail, userName, userPassword, userFavorites}
    };
};


export const favoriteHandler = (userFavorites) => {
    return {
        type: FAVORITE,
        payload: {userFavorites}
    };
};

export const updateUser = (userName, userPassword) => {
    return {
        type: UPDATE_USER,
        payload: {userName, userPassword}
    };
};


export const logoutUser = () => {
    return{
        type: LOGOUT_USER
    }
}