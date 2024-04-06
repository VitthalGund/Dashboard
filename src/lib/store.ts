import { combineReducers, configureStore } from "@reduxjs/toolkit";
import candidateSlice from "./features/candiate/candidateSlice";

const rootReducer = combineReducers({
  candidateSlice: candidateSlice,
});

export default configureStore({
  reducer: {
    rootReducer: rootReducer,
  },
});
