import style from "./auth.module.css";
import PropTypes from "prop-types";
import { ReactComponent as LoginIcon } from "./img/login.svg";
import { urlAuth } from "../../../api/auth.js";
import Text from "../../../ui/text/index.jsx";
import { useEffect, useState } from "react";
import { URL_API } from "../../../api/const.js";

export const Auth = ({ token, deleteToken }) => {
  const [auth, setAuth] = useState({});
  const [isShowLogout, setIsShowLogout] = useState(false);

  const handleShowLogout = () => {
    setIsShowLogout(!isShowLogout);
  };

  const handleLogout = () => {
    deleteToken();
    setAuth({});
    setIsShowLogout(!isShowLogout);
  };

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) =>
        response.status !== 401 ? response.json() : deleteToken
      )
      .then(({ name, icon_img }) => {
        const img = icon_img.replace(/\?.*$/, "");
        setAuth({ name, img });
      })
      .catch((err) => {
        console.log(err);
        setAuth({});
      });
  }, [token]);

  return (
    <div className={style.container}>
      {auth.name ? (
        <button className={style.btn} onClick={handleShowLogout}>
          <img
            className={style.img}
            src={auth.img}
            title={auth.name}
            alt={`Аватар ${auth.name}`}
          />
        </button>
      ) : (
        <Text className={style.authLink} As="a" href={urlAuth}>
          <LoginIcon className={style.svg} />
        </Text>
      )}
      {isShowLogout && (
        <button onClick={handleLogout} className={style.logout}>
          Выйти
        </button>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  deleteToken: PropTypes.func,
};
