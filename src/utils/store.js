import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    nav: navSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
