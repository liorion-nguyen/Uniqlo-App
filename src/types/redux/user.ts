export type UserState = {
  loading: boolean;
  user: UserType | null;
  errorMessage: string | null;
};

export enum EGender {
  Male = "Male",
  Female = "Female",
}

export type Phone = {
  countryCode: string;
  number: string;
};

export type Address = {
  province: string;
  district: string;
  ward: string;
};

export type UserType = {
  _id: string;
  email: string;
  password: string;
  phone: Phone;
  fullName: string;
  dateOfBirth: Date;
  address: Address;
  deviceTokens: string[];
  advice: string;
  status: string;
  role: string;
  gender: string;
  createdAt?: Date;
  updatedAt?: Date;
};
