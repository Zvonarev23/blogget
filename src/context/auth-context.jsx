import { createContext } from "react";
import { useAuth } from "../hooks/use-auth.js";
import PropTypes from "prop-types";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [auth, clearAuth] = useAuth();

  return (
    <AuthContext.Provider value={{ auth, clearAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
