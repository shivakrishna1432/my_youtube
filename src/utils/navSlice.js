import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    isMenu: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenu = !state.isMenu;
    },
    closeMenu: (state) => {
      state.isMenu = false;
    },
  },
});
export const { toggleMenu, closeMenu } = navSlice.actions;
export default navSlice.reducer;
