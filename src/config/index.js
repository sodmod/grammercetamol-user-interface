import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {appReducer, setAllAppKeys, setAppKey} from "./app.slice";
import {
  apiConfiguration,
  useFetchDataQuery,
  useFormDataMutation,
  useLazyFetchDataQuery,
  useMutateMutation,
  useRefreshTokenMutation
} from "./api.config";

const reducer = combineReducers({
  app: appReducer,
  [apiConfiguration.reducerPath]: apiConfiguration.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare({
      serializableCheck: false,
    }).concat(apiConfiguration.middleware);
  },
});

export {
  setAllAppKeys,
  setAppKey,
  useFetchDataQuery,
  useFormDataMutation,
  useMutateMutation,
  useLazyFetchDataQuery,
  useRefreshTokenMutation
};