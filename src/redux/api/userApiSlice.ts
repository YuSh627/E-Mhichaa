import { api } from "./apiSlice";
import type {
  LoginCredentials,
  LoginResponse,
  RegisterCredentials,
} from "../types/types";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginCredentials>({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation<LoginResponse, RegisterCredentials>({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = userApi;
