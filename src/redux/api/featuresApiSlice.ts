import type {
  TransactionData,
  TranscationParams,
  UserCredentials,
} from "./../types/types";
import type { GetUserParams } from "../types/types";
import { api } from "./apiSlice";

export const featureApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    userInfo: builder.query<UserCredentials, GetUserParams>({
      query: (params) => ({
        url: "/api/wallet/userWallet",
        params: params,
      }),
    }),

    transaction: builder.query<TransactionData[], TranscationParams>({
      query: (id, duration = "", startDate = "", endDate = "") => ({
        url: `/api/wallet/transactions/${id}`,
        params: { duration, startDate, endDate },
      }),
    }),

    // sendMoney: builder.mutation({
    //   query: (recieverNumber, amount, mpin, senderNumber) => ({
    //     url: "/api/wallet/transfer",
    //     params: { recieverNumber, amount, mpin, senderNumber },
    //   }),
    // }),
  }),
});

export const { useUserInfoQuery, useTransactionQuery } = featureApiSlice;
