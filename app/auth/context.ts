import { Dispatch, SetStateAction, createContext } from "react";
import { IUser } from "../interface/user";

interface AuthContextType {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
