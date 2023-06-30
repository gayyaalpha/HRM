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
    })
})

export const {usePersonalInfoEditQuery} = formApiSlice