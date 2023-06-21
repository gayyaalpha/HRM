import { apiSlice } from "./apiSlice";

export const tenantApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        companySelect: builder.mutation({
            query: (companySubmit ) => ({
                url: '/Tenant/'+ companySubmit,
                method: 'GET',
            }),
        }),
    })
})

export const {
    useCompanySelectMutation
} = tenantApiSlice