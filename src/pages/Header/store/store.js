import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "scrollReducer",
  initialState: {
    scrollToHome: () => {},
    scrollToCompany: () => {},
    scrollToThankYou: () => {},
    scrollToFooter: () => {},
  },
  reducers: {
    setScrollToHome: (state, action) => {
      state.scrollToHome = action.payload;
    },
    setScrollToCompany: (state, action) => {
      state.scrollToCompany = action.payload;
    },
    setScrollToThankyou: (state, action) => {
      state.scrollToThankYou = action.payload;
    },
    setScrollToFooter: (state, action) => {
      console.log("first");
      state.scrollToFooter = action.payload;
    },
  },
});
export const {
  setScrollToCompany,
  setScrollToHome,
  setScrollToThankyou,
  setScrollToFooter,
} = scrollSlice.actions;
export default scrollSlice.reducer;
