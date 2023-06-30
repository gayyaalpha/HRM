import {createSlice} from '@reduxjs/toolkit';
import { ProfileInfoForm } from '../../../app/types/profileForm';


export interface ProfileState {
  profileInfoForm?: ProfileInfoForm;

}

const getProfileInfoForm = () :any=> {
  // return getArrayFromLocalStorage('profileInfo');
  return null
};


const initialState: ProfileState = {
    profileInfoForm: getProfileInfoForm(),
};

export const profileFormSlice = createSlice({
  name: 'profile',

  initialState,

  reducers: {
    setProfileForm: (state, action) => {
      state.profileInfoForm = action.payload;
    },
  },
});

export const {setProfileForm} = profileFormSlice.actions;

export default profileFormSlice.reducer;

export const selectProfileInfoForm = (state: any) => state.profileForm?.profileInfoForm;


