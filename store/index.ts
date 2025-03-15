import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Auth slice ni import qilish

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// ✅ Redux'dan foydalanish uchun TypeScript tiplari
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
