import {createSlice} from '@reduxjs/toolkit';

import {getArrayFromLocalStorage} from '../utils/helpers';

import {User} from '../types/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AuthState {
  user?: User;

  access_Token?: string | null;

  authentication?:User
}

const getToken = ():any => {

  return AsyncStorage.getItem('access_Token',(value)=>{
    if(value){
       console.log('value_token loading')
       return value
    }
    else{
        console.log("token notfound loading")
        return null 
    }
})
};

const getUser = () :any => {
  return getArrayFromLocalStorage('user');
 
};

const initialState: AuthState = {
  access_Token: null,

  user: getUser(),

  authentication:undefined
};

export interface AuthState {

  authentication?: User

}
export const authSlice = createSlice({
  name: 'user',

  initialState,

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    setToken: (state, action) => {
      // const {token} = action.payload;

      state.access_Token = action.payload;;
    },
    setAuthentication: (state: any, {payload}: any) => {

      state.authentication = payload;

    }
    
  },
});

export const {setUser, setToken ,setAuthentication} = authSlice.actions;

export default authSlice.reducer;

export const selectUser = (state: any) => state.user?.user;

export const selectToken = (state: any) => state.auth?.access_Token;
