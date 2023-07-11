import {apiSlice} from '../../../app/api/apiSlice';

export const industryApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getFullIssueList: builder.query({
      query: () => ({
        url: '/FaultReport/GetAllFaultReportDetails',
        method: 'GET',
        // providesTags: (result: any) =>
        //   result ? result.map(({id}: any) => ({type: 'Issue', id})) : ['Issue'],
        providesTags: ['Issue'],
      }),
      
    }),
    getAddNewIssueForm: builder.query({
      query: () => ({
        url: '/FaultReport/GetForm',
        method: 'GET',
        params: {feature: 'Production', formName: 'FaultReport'},
      }),
    }),
    issueSubmit: builder.mutation({
      query: payload => ({
        url: '/FaultReport',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Issue'],
    }),
  }),
});

export const {useGetFullIssueListQuery} = industryApiSlice;
export const {useGetAddNewIssueFormQuery} = industryApiSlice;
export const {useIssueSubmitMutation} = industryApiSlice;
