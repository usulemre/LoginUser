import { createStore,applyMiddleware,compose,combineReducers  } from 'redux';

import thunk from 'redux-thunk';
import { userSigninReducer } from './store/reducer/userReducer';


const initialState = {};
const reducer = combineReducers({
    userSignin : userSigninReducer,
})
const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))

export default store;