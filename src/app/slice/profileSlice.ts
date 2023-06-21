import {createSlice} from '@reduxjs/toolkit';
import {getArrayFromLocalStorage} from '../utils/helpers';
import {BankInfo, BenefitInfo, CertificationInfo, ContactInfo, DocumentInfo, EducationInfo, JobInfo, ProfileInfo, WorkInfo, payslipInfo} from '../types/profileInfo';

export interface ProfileState {
  profileInfo?: ProfileInfo;
  contactInfo?: ContactInfo;
  jobInfo?: JobInfo;
  certificationInfo?:CertificationInfo;
  educationInfo?:EducationInfo;
  bankInfo?:BankInfo;
  workInfo?:WorkInfo
  documentInfo?:DocumentInfo
  benefitInfo?:BenefitInfo
  payslipInfo?:payslipInfo
}

const getProfileInfo = () :any=> {
  // return getArrayFromLocalStorage('profileInfo');
  return null
};

const getContactInfo = () :any=> {
  // return getArrayFromLocalStorage('contact');
  return null
};

const getJobInfo = () :any=> {
  return getArrayFromLocalStorage('contact');
  return null
};
const getCertificationInfo = () :any=> {
  return null
};
const getEducationInfo = () :any=> {
  return null
};
const getBankInfo = () :any=> {
  return null
};
const getWorkInfo = () :any=> {
  return null
};
const getDocumentInfo = () :any=> {
  return null
};
const getBenefitInfo = () :any=> {
  return null
};
const getPayslipInfo = () :any=> {
  return null
};


const initialState: ProfileState = {
  profileInfo: getProfileInfo(),
  contactInfo: getContactInfo(),
  jobInfo : getJobInfo(),
  certificationInfo : getCertificationInfo(),
  educationInfo : getEducationInfo(),
  bankInfo: getBankInfo(),
  workInfo: getWorkInfo(),
  documentInfo: getDocumentInfo(),
  benefitInfo: getBenefitInfo(),
  payslipInfo:getPayslipInfo(),
};

export const profileSlice = createSlice({
  name: 'profile',

  initialState,

  reducers: {
    setProfileInfo: (state, action) => {
      state.profileInfo = action.payload;
    },
    setContactInfo: (state, action) => {
      state.contactInfo = action.payload;
    },
    setJobInfo: (state, action) => {
      state.jobInfo = action.payload;
    },
    setCertificationInfo: (state, action) => {
      state.certificationInfo = action.payload;
    },
    setEducationInfo: (state, action) => {
      state.educationInfo = action.payload;
    },
    setBankInfo: (state, action) => {
      state.bankInfo = action.payload;
    },
    setWorkInfo: (state, action) => {
      state.workInfo = action.payload;
    },
    setDocumentInfo: (state, action) => {
      state.documentInfo = action.payload;
    },
    setBenefitInfo: (state, action) => {
      state.benefitInfo = action.payload;
    },
    setPayslipInfo: (state, action) => {
      state.payslipInfo = action.payload;
    },
  },
});

export const {setProfileInfo} = profileSlice.actions;
export const {setContactInfo} = profileSlice.actions;
export const {setJobInfo} = profileSlice.actions;
export const {setCertificationInfo} = profileSlice.actions;
export const {setEducationInfo} = profileSlice.actions;
export const {setBankInfo} = profileSlice.actions;
export const {setWorkInfo} = profileSlice.actions;
export const {setDocumentInfo} = profileSlice.actions;
export const {setBenefitInfo} = profileSlice.actions;
export const {setPayslipInfo} = profileSlice.actions;

export default profileSlice.reducer;

export const selectProfileInfo = (state: any) => state.profileInfo?.profileInfo;
export const selectContactInfo = (state: any) => state.profileInfo?.contactInfo;
export const selectJobInfo = (state: any) => state.profileInfo?.jobInfo;
export const selectCertificationInfo = (state: any) => state.profileInfo?.certificationInfo;
export const selectEducationInfo = (state: any) => state.profileInfo?.educationInfo;
export const selectBankInfo = (state: any) => state.profileInfo?.bankInfo;
export const selectWorkInfo = (state: any) => state.profileInfo?.workInfo;
export const selectDocumentInfo = (state: any) => state.profileInfo?.documentInfo;
export const selectBenefitInfo = (state: any) => state.profileInfo?.benefitInfo;
export const selectPayslipInfo = (state: any) => state.profileInfo?.payslipInfo;


