import { createContext } from "react";
import { useToken } from "../hooks/use-token.js";
import PropTypes from "prop-types";

export const TokenContext = createContext({});

export const TokenContextProvider = ({ children }) => {
  const [token, deleteToken] = useToken();

  return (
    <TokenContext.Provider value={{ token, deleteToken }}>
      {children}
    </TokenContext.Provider>
  );
};

TokenContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
