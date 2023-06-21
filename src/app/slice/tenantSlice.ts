import {createSlice} from '@reduxjs/toolkit';
import {Tenant} from '../types/tenant';
import {getArrayFromLocalStorage} from '../utils/helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '@env';

export interface TenantState {
  tenant?: Tenant;

  baseUrl?: string | null;
}

const getBaseUrl = ():any  => {
    
    return AsyncStorage.getItem('baseUrl',(value)=>{
         if(value){
            console.log('value loading')
            return value
         }
         else{
             console.log("url  loading")
             return BASE_URL
         }
   });
     
   
 };


const getTenant = (): any => {
  //first 
//   console.log(getArrayFromLocalStorage('tenent'))
 return  getArrayFromLocalStorage('tenant')
 return null
};

const initialState: TenantState = {
  tenant: getTenant(),

  baseUrl: BASE_URL,
};

export const tenantSlice = createSlice({
  name: 'tenant',

  initialState,

  reducers: {
    setTenant: (state, action) => {
      state.tenant = action.payload;
    },

    setBaseUrl: (state, action) => {
      const {baseUrl} = action.payload;

      state.baseUrl = baseUrl;
    },
  },
});




export const {setTenant, setBaseUrl} = tenantSlice.actions;

export default tenantSlice.reducer;

export const selectTenant = (state: any) => state.tenant?.tenant;

export const selectBaseUrl = (state: any) => state.tenant.baseUrl;
