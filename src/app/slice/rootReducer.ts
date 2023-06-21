import { combineReducers } from 'redux';
import { apiSlice } from '../api/apiSlice'; 
import {authSlice} from './authSlice';
import { tenantSlice } from './tenantSlice';
import {profileSlice} from './profileSlice';


const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice.reducer,
    tenant: tenantSlice.reducer,
    profileInfo:profileSlice.reducer
 
});

export default rootReducer;