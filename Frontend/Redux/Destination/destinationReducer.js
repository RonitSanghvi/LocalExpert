import { SAVE_DESTINATION, CHANGE_DESTINATION } from "./destinationTypes"

const initialState = {
    Id: '',
    Name: '',
    City: '',
    State:'',
    Country:'',
    Description:'',
    Author:'',
    Image:'',

    error: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SAVE_DESTINATION:
            return{
                ...state,
                Id: action.payload.id,
                Name: action.payload.name,
                City: action.payload.city,
                State:action.payload.state,
                Country:action.payload.country,
                Description:action.payload.description,
                Author:action.payload.author,
                Image:action.payload.image,
            }
        case CHANGE_DESTINATION:
            return{
                ...state,
                Id: action.payload.id,
                Name: action.payload.name,
                City: action.payload.city,
                State:action.payload.state,
                Country:action.payload.country,
                Description:action.payload.description,
                Author:action.payload.author,
                Image:action.payload.image,
            }
        default: return state
    }
}

export default reducer