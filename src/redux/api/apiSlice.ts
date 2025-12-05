import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://springjava.onrender.com",
  prepareHeaders: (headers, { endpoint }) => {
    if (endpoint !== "login" && endpoint !== "register") {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
    }
    return headers;
  },
});

export const api = createApi({
  baseQuery,
  endpoints: () => ({}),
});
