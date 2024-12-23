export type BottomTabsParams = {
  HomeStack: undefined;
  Setting: undefined;
  Notification: undefined;
  Contact: undefined;
};

export type AuthStackParams = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  OTPInput: {
    email: string;
  };
};

export type HomeStackParams = {
  Home: undefined;
  ProductDetail: {
    productId: string;
  };
  Cart: undefined;
  Message: undefined;
  MessageDetail: {
    id: string;
  };
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
