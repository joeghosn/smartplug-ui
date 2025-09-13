import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE = import.meta.env.VITE_DEVICE_BASE_URL as string;

export type Status = {
  power: number;
  voltage: number;
  current: number;
  relayOn: boolean;
  kwhTotal: number;
  ts: number;
};

export const smartplugApi = createApi({
  reducerPath: "smartplugApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE }),
  tagTypes: ["Status"],
  endpoints: (builder) => ({
    getStatus: builder.query<Status, void>({
      query: () => "/status",
      providesTags: ["Status"],
    }),
    setRelay: builder.mutation<
      { ok: boolean; relayOn: boolean },
      { on: boolean }
    >({
      query: (body) => ({
        url: "/relay",
        method: "POST",
        body,
        headers: { "Content-Type": "application/json" },
      }),
      invalidatesTags: ["Status"],
    }),
  }),
});

export const { useGetStatusQuery, useSetRelayMutation } = smartplugApi;
