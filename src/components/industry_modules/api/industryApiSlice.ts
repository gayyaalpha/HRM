import { apiSlice } from "../../../app/api/apiSlice";

export const industryApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getFullIssueList: builder.query({
      query: () => ({
        url: '/FaultReport/GetAllFaultReportDetails',
        method: 'GET',
      }),
    }),
    getAddNewIssueForm: builder.query({
        query: () => ({
          url: '/FaultReport/GetForm',
          method: 'GET',
          params: {feature:'Production', formName:'FaultReport'} 
        }),
      }),
  }),
});

export const {useGetFullIssueListQuery} = industryApiSlice;
export const {useGetAddNewIssueFormQuery} = industryApiSlice;


