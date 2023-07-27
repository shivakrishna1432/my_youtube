import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    nav: navSlice,
    search: searchSlice,
  },
});

export default store;
