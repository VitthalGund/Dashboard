import {
  combineReducers,
  configureStore,
  SerializedError,
} from "@reduxjs/toolkit";
import candidateSlice from "./features/candiate/candidateSlice";

const rootReducer = combineReducers({
  candidateSlice: candidateSlice,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredPaths: ["payload"],
          ignoredActionPaths: ["payload"],
        },
      }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
