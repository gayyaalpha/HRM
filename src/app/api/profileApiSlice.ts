import {apiSlice} from './apiSlice';

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getPersonalInfo: builder.query({
      query: () => ({
        url: '/PersonalInfo/GetUser',
        method: 'GET',
      }),
    }),
    getContactInfo: builder.query({
      query: () => ({
        url: '/Contact/GetUser',
        method: 'GET',
      }),
    }),
    getJobInfo: builder.query({
      query: () => ({
        url: '/JobDetails/GetUser',
        method: 'GET',
      }),
    }),
    getQualificationInfo: builder.query({
      query: () => ({
        url: '/Certifications/GetUser',
        method: 'GET',
      }),
    }),
    getEducationInfo: builder.query({
      query: () => ({
        url: '/Education/GetUser',
        method: 'GET',
      }),
    }),
    getAccountInfo: builder.query({
      query: () => ({
        url: '/Account/GetUser',
        method: 'GET',
      }),
    }),
    getExperienceInfo: builder.query({
      query: () => ({
        url: '/Experience/GetUser',
        method: 'GET',
      }),
    }),
    getPolicyInfo: builder.query({
      query: () => ({
        url: '/Policy/GetUser',
        method: 'GET',
      }),
    }),
    getBenifitInfo: builder.query({
      query: () => ({
        url: '/BenefitDetails/GetUser',
        method: 'GET',
      }),
    }),
    getPaySlipsInfo: builder.query({
      query: () => ({
        url: '/PaySlips/GetUser',
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetPersonalInfoQuery} = profileApiSlice;
export const {useGetContactInfoQuery} = profileApiSlice;
export const {useGetJobInfoQuery} = profileApiSlice;
export const {useGetQualificationInfoQuery} = profileApiSlice;
export const {useGetEducationInfoQuery} = profileApiSlice;
export const {useGetAccountInfoQuery} = profileApiSlice;
export const {useGetExperienceInfoQuery} = profileApiSlice;
export const {useGetPolicyInfoQuery} = profileApiSlice;
export const {useGetBenifitInfoQuery} = profileApiSlice;
export const {useGetPaySlipsInfoQuery} = profileApiSlice;

