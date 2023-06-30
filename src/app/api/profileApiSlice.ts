import {apiSlice} from './apiSlice';

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getPersonalInfo: builder.query({
      query: () => ({
        url: '/PersonalInfo/GetPersonalInfomationByUserToken',
        method: 'GET',
      }),
    }),
    getContactInfo: builder.query({
      query: () => ({
        url: '/Contact/GetContactDetailsByUserToken',
        method: 'GET',
      }),
    }),
    getJobInfo: builder.query({
      query: () => ({
        url: '/JobDetails/GetJobDetailsByUserToken',
        method: 'GET',
      }),
    }),
    getQualificationInfo: builder.query({
      query: () => ({
        url: '/PersonalInfo/GetQualificationDetailsByToken',
        method: 'GET',
      }),
    }),
    getAccountInfo: builder.query({
      query: () => ({
        url: '/Account/GetAccountDetailsByUserToken',
        method: 'GET',
      }),
    }),
    getExperienceInfo: builder.query({
      query: () => ({
        url: '/Experience/GetExperienceByUserToken',
        method: 'GET',
      }),
    }),
    getPolicyInfo: builder.query({
      query: () => ({
        url: '/Policy/GetPolicyByUserToken',
        method: 'GET',
      }),
    }),
    getBenifitInfo: builder.query({
      query: () => ({
        url: '/BenefitDetails/GetBenefitDetailsByUserToken',
        method: 'GET',
      }),
    }),
    getPaySlipsInfo: builder.query({
      query: () => ({
        url: '/PaySlips/GetPaySlipsByUserToken',
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetPersonalInfoQuery} = profileApiSlice;
export const {useGetContactInfoQuery} = profileApiSlice;
export const {useGetJobInfoQuery} = profileApiSlice;
export const {useGetQualificationInfoQuery} = profileApiSlice;
export const {useGetAccountInfoQuery} = profileApiSlice;
export const {useGetExperienceInfoQuery} = profileApiSlice;
export const {useGetPolicyInfoQuery} = profileApiSlice;
export const {useGetBenifitInfoQuery} = profileApiSlice;
export const {useGetPaySlipsInfoQuery} = profileApiSlice;

