import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '@env';


const baseQuery = fetchBaseQuery({
    baseUrl:BASE_URL,
    
})

const baseQueryWithReAuth: any = async (
    args: any,
    api: any,
    extraOptions: any,
  ) => {
    const baseUrl = (api.getState() as any)?.tenant?.baseUrl;
    console.log({baseUrl})
  
    const rawBaseQuery = fetchBaseQuery({
      baseUrl: baseUrl?baseUrl:BASE_URL,
  
      prepareHeaders: (headers, {getState}: any) => {
        const token = (api.getState() as any)?.auth?.access_Token;
        console.log('apiSlice '+token)
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
  
        return headers;
      },
    });
  
    return rawBaseQuery(args, api, extraOptions);
  
    // return baseQuery
  };
  



export const apiSlice = createApi({
    tagTypes:['data'],
    baseQuery: baseQueryWithReAuth,
    endpoints: builder => ({})
})