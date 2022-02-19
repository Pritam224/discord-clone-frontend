import { configureStore } from '@reduxjs/toolkit';
import useReducer from '../features/userSlice';
import appReducer from "../features/appSlice";

export const store = configureStore({
  reducer: {
    counter: useReducer,
    app: appReducer,
  },
});
