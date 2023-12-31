import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./user-slice";

const store = configureStore({
    reducer: { userAuth: userSlice.reducer }
});

export default store;