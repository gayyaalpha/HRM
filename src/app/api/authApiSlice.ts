import {apiSlice} from './apiSlice';
import {User} from '../types/user';
import { LoginRequest, UserResponse } from '../utils/helpers';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAuthenticate: builder.mutation<UserResponse,LoginRequest>({
      query: (credentials) => ({
        url: '/Users/Authenticate',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {useGetAuthenticateMutation} = authApiSlice;
