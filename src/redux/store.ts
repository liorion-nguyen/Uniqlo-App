import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { authenticationReducer } from './slices/authentication';
import { userReducer } from './slices/user';
import { categoryReducer } from './slices/category';
import { productReducer } from './slices/product';
const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    user: userReducer,
    categories: categoryReducer,
    products: productReducer,
  },
});

const { dispatch } = store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export { store, dispatch, useSelector, useDispatch };