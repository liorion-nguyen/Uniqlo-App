export enum EGender {
  M,
  F,
}

export enum EUserRole {
  Doctor,
  Member,
}
export interface IUserProfile {
  phone: string;
  password: string;
  birthday: string;
  fullname: string;
  gender: EGender;
  email: string;
  role: EUserRole;
  avatarUrl?: string;
  avatarName?: string;

  // For Doctor
  degree?: string;
  position?: string;
  intro?: string[];
  expertises?: string[];
  services?: string[];
}
