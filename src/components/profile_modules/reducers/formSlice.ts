import {createSlice} from '@reduxjs/toolkit';
import { ContactHomeForm, ContactOfficeForm, ProfileInfoForm, JobDetailForm, BankDetailForm } from '../../../app/types/profileForm';


export interface ProfileState {
  profileInfoForm?: ProfileInfoForm;
  contactOfficeForm?: ContactOfficeForm;
  contactHomeForm?: ContactHomeForm;
  jobDetailForm?: JobDetailForm;
  bankDetailForm?: BankDetailForm;



}

const getProfileInfoForm = () :any=> {
  // return getArrayFromLocalStorage('profileInfo');
  return null
};
const getContactHomeForm = () :any=> {
  // return getArrayFromLocalStorage('profileInfo');
  return null
};
const getContactOfficeForm = () :any=> {
  // return getArrayFromLocalStorage('profileInfo');
  return null
};


const initialState: ProfileState = {
    profileInfoForm: getProfileInfoForm(),
    contactOfficeForm: getContactOfficeForm(),
    contactHomeForm: getContactHomeForm(),
    jobDetailForm:undefined,
    bankDetailForm:undefined
};

export const profileFormSlice = createSlice({
  name: 'profile',

  initialState,

  reducers: {
    setProfileForm: (state, action) => {
      state.profileInfoForm = action.payload;
    },
    setContactOfficeForm: (state, action) => {
      state.contactOfficeForm = action.payload;
    },
    setContactHomeForm: (state, action) => {
      state.contactHomeForm = action.payload;
    },
    setJobDetailForm: (state, action) => {
      state.jobDetailForm = action.payload;
    },
    setBankDetailForm: (state, action) => {
      state.bankDetailForm = action.payload;
    },
  },
});

export const {setProfileForm} = profileFormSlice.actions;
export const {setContactOfficeForm} = profileFormSlice.actions;
export const {setContactHomeForm} = profileFormSlice.actions;
export const {setJobDetailForm} = profileFormSlice.actions;
export const {setBankDetailForm} = profileFormSlice.actions;

export default profileFormSlice.reducer;

export const selectProfileInfoForm = (state: any) => state.profileForm?.profileInfoForm;
export const selectContactHomeForm = (state: any) => state.profileForm?.contactHomeForm;
export const selectContactOfficeForm = (state: any) => state.profileForm?.contactOfficeForm;
export const selectJobDetailForm = (state: any) => state.profileForm?.jobDetailForm;
export const selectBankDetailForm = (state: any) => state.profileForm?.bankDetailForm;


