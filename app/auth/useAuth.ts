import { jwtDecode } from "jwt-decode";
import { useContext } from "react";

import { IUser } from "../interface/user";
import AuthContext from "./context";
import authStorage from "./storage";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (token: string) => {
    const user: IUser = jwtDecode(token);
    setUser(user);
    authStorage.storeToken(token);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
};

export default useAuth;
