import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import {
    AuthenticationState,
    LoginRequestType,
    LoginResponseType,
    RegisterRequestType,
} from '../../types/redux/authentication';
import { envConfig } from '../../../config';
import toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUser, userSlice } from './user';

type RegisterFailureAction = PayloadAction<string>;
type LoginFailureAction = PayloadAction<string>;
type ForgotPasswordFailureAction = PayloadAction<string>;
type ResetPasswordFailureAction = PayloadAction<string>;

const initialState: AuthenticationState = {
    loading: false,
    isAuthenticated: false,
    errorMessage: '',
    forgotEmailSent: false,
    open: '',
};

export const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        // REGISTER
        registerRequest: (state: AuthenticationState) => {
            state.loading = true;
        },
        registerSuccess: (state: AuthenticationState) => {
            state.loading = false;
        },
        registerFailure: (state: AuthenticationState, action: RegisterFailureAction) => {
            state.loading = false;
            state.errorMessage = action.payload;
        },
        // LOGIN
        loginRequest: (state: AuthenticationState) => {
            state.loading = true;
        },
        loginSuccess: (state: AuthenticationState) => {
            state.loading = false;
            state.isAuthenticated = true;
        },
        loginFailure: (state: AuthenticationState, action: LoginFailureAction) => {
            state.loading = false;
            state.errorMessage = action.payload;
        },
        // LOGOUT
        logout: (state: AuthenticationState) => {
            state.isAuthenticated = false;
        },
        // FORGOT PASSWORD
        forgotPasswordRequest: (state: AuthenticationState) => {
            state.forgotEmailSent = false;
            state.loading = true;
        },
        forgotPasswordSuccess: (state: AuthenticationState) => {
            state.forgotEmailSent = true;
            state.loading = false;
        },
        forgotPasswordFailure: (state: AuthenticationState, action: ForgotPasswordFailureAction) => {
            state.loading = false;
            state.errorMessage = action.payload;
        },
        // RESET PASSWORD
        resetPasswordRequest: (state: AuthenticationState) => {
            state.loading = true;
        },
        resetPasswordSuccess: (state: AuthenticationState) => {
            state.loading = false;
        },
        resetPasswordFailure: (state: AuthenticationState, action: ResetPasswordFailureAction) => {
            state.loading = false;
            state.errorMessage = action.payload;
        },
        setDiaLog: (state: AuthenticationState, action: PayloadAction<string>) => {
            state.open = action.payload;
        },
    },
});

export const register = (registerData: RegisterRequestType) => {
    return async (dispatch: any) => {
        try {
            registerData.phone.country = registerData.phone.country.substring(
                0,
                registerData.phone.country.length - registerData.phone.number.length
            );
            dispatch(authenticationSlice.actions.registerRequest());
            const result = await axios.post(`${envConfig.serverURL}/auth/register`, registerData);
            dispatch(authenticationSlice.actions.registerSuccess());
            toast.show({
                text1: 'Registration saved! Please check your email for confirmation.',
                type: 'success',
                position: 'bottom',
                visibilityTime: 3000,
            });
        } catch (error: any) {
            const errorMessage: string = error.response
                ? error.response.data.message
                : 'Something went wrong';
            toast.show({
                text1: errorMessage,
                type: 'error',
                position: 'bottom',
                visibilityTime: 3000,
            });
            dispatch(authenticationSlice.actions.registerFailure(errorMessage));
        }
    };
};

export const login = (loginData: LoginRequestType) => {
    return async (dispatch: any) => {
        try {
            dispatch(authenticationSlice.actions.loginRequest());
            const result = await axios.post(`${envConfig.serverURL}/auth/login`, loginData);
            const data: LoginResponseType = result.data ? result.data.data : null;
            if (data) {
                await AsyncStorage.setItem("accessToken", data.access_token);
                await AsyncStorage.setItem("refreshToken", data?.refresh_token || '');
                await dispatch(getUser());
            }
            dispatch(authenticationSlice.actions.loginSuccess());
            toast.show({
                text1: 'Đăng nhập thành công',
                type: 'success',
                position: 'bottom',
                visibilityTime: 3000,
            });
        } catch (error: any) {
            const errorMessage: string = error.response
                ? error.response.data.message
                : 'Something went wrong';
            toast.show({
                text1: errorMessage,
                type: 'error',
                position: 'bottom',
                visibilityTime: 3000,
            });
            dispatch(authenticationSlice.actions.loginFailure(errorMessage));
        }
    };
};

export const logout = () => {
    return async (dispatch: any) => {
        dispatch(authenticationSlice.actions.logout());

        await axios.post(`${envConfig.serverURL}/auth/logout`, {
            refresh_token: await AsyncStorage.getItem("refreshToken"),
        });
        await AsyncStorage.removeItem("accessToken");
        await AsyncStorage.removeItem("refreshToken");
        dispatch(userSlice.actions.logout());
        toast.show({
            text1: 'Đăng xuất thành công',
            type: 'success',
            position: 'bottom',
            visibilityTime: 3000,
        });
    };
};

export const forgotPassword = () => {
    return async (dispatch: any) => {
        try {
            dispatch(authenticationSlice.actions.forgotPasswordRequest());
            
            dispatch(authenticationSlice.actions.forgotPasswordSuccess());
            toast.show({
                text1: 'New password has been sent to your email',
                type: 'success',
                position: 'bottom',
                visibilityTime: 3000,
            });
            dispatch(handleOpenDialog('login'));
        } catch (error: any) {
            const errorMessage: string = error.response
                ? error.response.data.message
                : 'Something went wrong';
            toast.show({
                text1: errorMessage,
                type: 'error',
                position: 'bottom',
                visibilityTime: 3000,
            });
            dispatch(authenticationSlice.actions.forgotPasswordFailure(errorMessage));
        }
    };
};

export const resetPassword = (key: string, newPassword: string) => {
    return async (dispatch: any) => {
        try {
            dispatch(authenticationSlice.actions.resetPasswordRequest());
            await axios.post(`/auth/reset/reset-password/${key}`, {
                password: newPassword,
            });
            dispatch(authenticationSlice.actions.resetPasswordSuccess());
            toast.show({
                text1: 'Your password has been successfully updated!',
                type: 'success',
            });
        } catch (error: any) {
            const errorMessage: string = error.response
                ? error.response.data.message
                : 'Something went wrong';
            toast.show({
                text1: errorMessage,
                type: 'error',
            });
            dispatch(authenticationSlice.actions.resetPasswordFailure(errorMessage));
        }
    };
};

export const handleOpenDialog = (value: string) => {
    return async (dispatch: any) => {
        dispatch(authenticationSlice.actions.setDiaLog(value));
    };
};

export const authenticationReducer = authenticationSlice.reducer;