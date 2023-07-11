import { apiSlice } from "../../../app/api/apiSlice";

export const jsonApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getJsonUrl: builder.query({
      query: (url) => ({
        url: url,
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetJsonUrlQuery} = jsonApiSlice;


