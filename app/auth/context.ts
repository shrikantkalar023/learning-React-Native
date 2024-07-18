import { Dispatch, SetStateAction, createContext } from "react";
import { IUser } from "../interface/user";

interface AuthContextType {
  user?: IUser;
  setUser: Dispatch<SetStateAction<IUser | undefined>>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
