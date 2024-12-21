import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {store} from "./index";
import {setAppKey} from "./app.slice";
import {endpoints} from "../store/endpoints";
import {getCookie} from "../store/storage";

export const baseUrl = import.meta.env.VITE_APP_API_BASE_URL;
// const online = "";
// export const local = "http://localhost:7009/api/";
// export const baseUrl = online;

export const baseQueryWithReAuth =
  (baseQuery) => async(args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);


    if(result?.error && result?.error?.status === 401) {
      store.dispatch(
        setAppKey({
          key: "isTokenExpired",
          value: true,
        })
      );
    }
    return result;
  };

export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    if(getCookie("***") && getCookie("***").length > 0) {
      headers.set("Authorization", getCookie("***"));
    }
    return headers;
  },
});

// it returns user path, middleware and reducer
export const apiConfiguration = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReAuth(baseQuery),
  tagTypes: ["getData"],
  endpoints: (builder) => ({
    FormData: true,
    fetchData: builder.query({
      query: (state) => {
        return {
          url: state.getUrl,
        };
      },
      providesTags: ["getData"],
    }),
    refreshToken: builder.mutation({
      query: () => {
        return {
          url: endpoints.auth["refresh-token"] + getCookie("****"),
          method: "POST",
          // body: state.request,
        };
      },
    }),
    mutate: builder.mutation({
      query: (state) => {
        return {
          url:
            state.formMethod === "POST"
              ? state.postUrl
              : state.formMethod === "PUT"
                ? state.updateUrl
                : state.deleteUrl,
          method: state.formMethod,
          body: state.request,
        };
      },
      invalidatesTags: (_result, _error, arg) => [
        {
          type: "getData",
          id: arg.id,
        },
      ],
    }),
    formData: builder.mutation({
      query: (state) => {
        return {
          url: state.postUrl,
          formData: true,
          method: "POST",
          body: state.request,
        };
      },
    }),
  }),
});

export const {
  useFetchDataQuery,
  useMutateMutation,
  useFormDataMutation,
  useLazyFetchDataQuery,
  useRefreshTokenMutation,
} = apiConfiguration;
