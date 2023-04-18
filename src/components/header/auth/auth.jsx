import style from "./auth.module.css";
import { ReactComponent as LoginIcon } from "./img/login.svg";
import { urlAuth } from "../../../api/auth.js";
import Text from "../../../ui/text/index.jsx";
import { useState, useContext } from "react";
import { useAuth } from "../../../hooks/use-auth.js";
import { TokenContext } from "../../../context/token-context.js";

export const Auth = () => {
  const { deleteToken } = useContext(TokenContext);
  const [auth, clearAuth] = useAuth();
  const [isShowLogout, setIsShowLogout] = useState(false);

  const handleShowLogout = () => {
    setIsShowLogout(!isShowLogout);
  };

  const handleLogout = () => {
    deleteToken();
    clearAuth();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn} onClick={handleShowLogout}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`}
            />
          </button>
          {isShowLogout && (
            <button onClick={handleLogout} className={style.logout}>
              Выйти
            </button>
          )}
        </>
      ) : (
        <Text className={style.authLink} As="a" href={urlAuth}>
          <LoginIcon className={style.svg} />
        </Text>
      )}
    </div>
  );
};
