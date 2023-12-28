import axios from "axios"
import { SAVE_DESTINATION, CHANGE_DESTINATION } from "./destinationTypes"

export const saveDestination = (id, name, city, state, country, description, author, image) => {
    return {
        type: SAVE_DESTINATION,
        payload: { id, name, city, state, country, description, author, image}
    };
};

export const updateDestination = (id, name, city, state, country, description, author, image) => {
    return{
        type: CHANGE_DESTINATION,
        payload: { id, name, city, state, country, description, author, image}
    }
}