import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import rootReducer from './RootReducer'
import logger from 'redux-logger'
import {thunk} from 'redux-thunk';

import { composeWithDevTools } from '@redux-devtools/extension';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store