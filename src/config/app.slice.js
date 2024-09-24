import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  request: {},
  response: {},
  contentType: "",
  isLoggedIn: false,
  isTokenExpired: false,
  token: "",
  postUrl: "",
  updateUrl: "",
  deleteUrl: "",
  getUrl: "",
  formMethod: "POST" | "PUT" | "DELETE",
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setAppKey(state, action){
      const key = action.payload.key;
      const value = action.payload.value;
      state = {
        ...state,
        [key]: value,
      };
      return state;
    },
    setAllAppKeys(state, action){
      state = action.payload;
      return state;
    },
  },
});

export const appReducer = appSlice.reducer;
export const {setAppKey, setAllAppKeys} = appSlice.actions;

// onFieldChange: (state, action) => {
//     state = {
//         ...state,
//         request: {
//             ...state.request,
//             [action.payload.key]: action.payload.value
//         }
//     }
// }
