import { VITE_SERVER_URL } from '@env';

export const envConfig = {
    // googleAppId: VITE_GOOGLE_APP_ID,
    serverURL: VITE_SERVER_URL,
    // serverURL: "http://localhost:8200"
};

export const localStorageConfig = {
    accessToken: 'jwt-access-token',
    refreshToken: 'jwt-refresh-token',
};
