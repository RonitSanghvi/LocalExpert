import { combineReducers } from "redux";
import userReducer from './User/userReducer'
import destinationReducer from './Destination/destinationReducer'

const rootReducer = combineReducers({user: userReducer, destination: destinationReducer})

export default rootReducer