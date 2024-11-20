import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import toast from 'react-native-toast-message';
import { envConfig } from '../../../config';
import { CategoryState, CategoryType } from '../../types/redux/category';

type GetCategorySuccessAction = PayloadAction<CategoryType[]>;
type GetCategoryFailureAction = PayloadAction<string>;

const initialState: CategoryState = {
  loading: false,
  categories: [],
  errorMessage: '',
};

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategoryRequest: (state: CategoryState) => {
      state.loading = true;
    },
    getCategorySuccess: (state: CategoryState, action: GetCategorySuccessAction) => {
      state.loading = false;
      state.categories = action.payload;
    },
    getCategoryFailure: (state: CategoryState, action: GetCategoryFailureAction) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const getCategory = () => {
  return async (dispatch: any) => {
    try {
      dispatch(categorySlice.actions.getCategoryRequest());

      // Gửi yêu cầu đến API
      const result: AxiosResponse<CategoryType[]> = await axios.get(
        `${envConfig.serverURL}/categories`
      );

      // Kiểm tra kết quả trả về
      if (result.data && Array.isArray(result.data)) {
        dispatch(categorySlice.actions.getCategorySuccess(result.data));
      } else {
        throw new Error('Invalid response format from server');
      }
    } catch (error: any) {
      // Xử lý lỗi
      const errorMessage =
        error.response?.data?.message || error.message || 'Something went wrong';
      toast.show({
        text1: errorMessage,
        type: 'error',
      });
      dispatch(categorySlice.actions.getCategoryFailure(errorMessage));
    }
  };
};

export const categoryReducer = categorySlice.reducer;
