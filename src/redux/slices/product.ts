import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import toast from 'react-native-toast-message';
import { envConfig } from '../../../config';
import { ProductState, ProductType } from '../../types/redux/product';

type GetProductsSuccessAction = PayloadAction<ProductType[]>;
type GetProductSuccessAction = PayloadAction<ProductType>;
type GetProductFailureAction = PayloadAction<string>;

const initialState: ProductState = {
  loading: false,
  products: [],
  product: null,
  errorMessage: '',
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductRequest: (state: ProductState) => {
      state.loading = true;
    },
    getProductsSuccess: (state: ProductState, action: GetProductsSuccessAction) => {
      state.loading = false;
      state.products = action.payload;
    },
    getProductFailure: (state: ProductState, action: GetProductFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    getProductSuccess: (state: ProductState, action: GetProductSuccessAction) => {
      state.loading = false;
      state.product = action.payload;
    },
  },
});

export const getProducts = () => {
  return async (dispatch: any) => {
    try {
      dispatch(productSlice.actions.getProductRequest());
      const result: AxiosResponse<ProductType[]> = await axios.get(
        `${envConfig.serverURL}/products`
      );
      if (result.data && Array.isArray(result.data)) {
        dispatch(productSlice.actions.getProductsSuccess(result.data));
      } else {
        throw new Error('Invalid response format from server');
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || error.message || 'Something went wrong';
      toast.show({
        text1: errorMessage,
        type: 'error',
      });
      dispatch(productSlice.actions.getProductFailure(errorMessage));
    }
  };
};

export const getProduct = (productId: string) => {
  return async (dispatch: any) => {
    try {
      dispatch(productSlice.actions.getProductRequest());
      const result: AxiosResponse<ProductType> = await axios.get(
        `${envConfig.serverURL}/products/${productId}`
      );
      if (result.data) {
        dispatch(productSlice.actions.getProductSuccess(result.data));
      } else {
        throw new Error('Invalid response format from server');
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || error.message || 'Something went wrong';
      toast.show({
        text1: errorMessage,
        type: 'error',
      });
      dispatch(productSlice.actions.getProductFailure(errorMessage));
    }
  };
};
export const productReducer = productSlice.reducer;
