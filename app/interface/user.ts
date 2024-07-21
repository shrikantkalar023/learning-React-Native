export interface ILogInUser {
  email: string;
  password: string;
}

export interface IUser {
  userId: number;
  email: string;
  name: string;
}

export interface IRegisterUser extends ILogInUser {
  name: string;
}
