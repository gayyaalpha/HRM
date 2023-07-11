import { combineReducers } from 'redux';
import { apiSlice } from '../api/apiSlice'; 
import {authSlice} from './authSlice';
import { tenantSlice } from './tenantSlice';
import {profileSlice} from './profileSlice';
import { profileFormSlice } from '../../components/profile_modules/reducers/formSlice';
import { IndustryIssueSlice } from '../../components/industry_modules/reducers/industrySlice';
import { JsonSlice } from '../../components/json_form/reducers/jsonSlice';


const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice.reducer,
    tenant: tenantSlice.reducer,
    profileInfo:profileSlice.reducer,
    profileForm:profileFormSlice.reducer,
    industryIssue:IndustryIssueSlice.reducer,
    json:JsonSlice.reducer
 
});

export default rootReducer;