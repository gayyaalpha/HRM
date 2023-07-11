import { apiSlice } from "../../../app/api/apiSlice"


export const submitApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        issueSubmit: builder.mutation({
            query: (payload ) => ({
                url: '/FaultReport',
                method: 'POST',
                body:payload
            }),
        }),
    })
})

export const {
    useIssueSubmitMutation
} = submitApiSlice