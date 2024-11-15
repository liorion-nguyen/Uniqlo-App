import { IUserProfile } from "./user";
import moment from "moment";

export interface INotification {
  id?: string;
  fromUser: string | IUserProfile;
  toUser: string | IUserProfile;
  content: string;
  createdAt: any;
}

export function getAllNoti(user: string, setState: any) {
  // Get all notifications of user
  return null;
}

export async function createNoti(noti: INotification) {
  // Create a new notification
}
