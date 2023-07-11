import { apiSlice } from "../../../app/api/apiSlice"


export const formApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        personalInfoEdit : builder.query({
            query: () => ({
                url: '/PersonalInfo/GetForm',
                method: 'GET',
                params: {feature:'Profile', formName:'PersonalInfo'} 
            }),           
        }),
        contactHomeEdit : builder.query({
            query: () => ({
                url: '/Contact/GetForm',
                method: 'GET',
                params: {feature:'Profile', formName:'HomeContact'}      
            }),
            
        }),
        contactOfficeEdit : builder.query({
            query: () => ({
                url: '/Contact/GetForm',
                method: 'GET',
                params: {feature:'Profile', formName:'OfficeContact'}      
            }),
            
        }),
        jobInfoEdit : builder.query({
            query: () => ({
                url: '/JobDetails/GetForm',
                method: 'GET',
                params: {feature:'Profile', formName:'JobDetails'}      
            }),
            
        }),
        BankDetailsEdit : builder.query({
            query: () => ({
                url: '/Account/GetForm',
                method: 'GET',
                params: {feature:'Profile', formName:'Account'}      
            }),
            
        }),
    })  
})


export const {usePersonalInfoEditQuery} = formApiSlice
export const {useContactHomeEditQuery} = formApiSlice
export const {useContactOfficeEditQuery} = formApiSlice
export const {useJobInfoEditQuery} = formApiSlice
export const {useBankDetailsEditQuery} = formApiSlice