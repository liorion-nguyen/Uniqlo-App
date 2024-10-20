export type BottomTabsParams = {
  HomeStack: undefined;
  Setting: undefined;
  Notification: undefined;
};

export type AuthStackParams = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  OTPInput: {
    target: "FillProfile" | "ResetPassword";
  };
  ResetPassword: undefined;
};

export type HomeStackParams = {
  Home: undefined;
  WritePost: undefined;
  History: undefined;
};

export type RootStackParams = {
  Auth: undefined;
  TabNav: undefined;
  FillProfile:
    | {
        phone: string;
        password: string;
      }
    | undefined;
  ChangePassword: undefined;
  ResponseForUs: undefined;
};
