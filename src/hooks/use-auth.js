import { useContext, useEffect, useState } from "react";
import { URL_API } from "../api/const.js";
import { TokenContext } from "../context/token-context.js";

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const { token, deleteToken } = useContext(TokenContext);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }

        return response.json();
      })
      .then(({ name, icon_img }) => {
        const img = icon_img.replace(/\?.*$/, "");
        setAuth({ name, img });
      })
      .catch((err) => {
        console.error(err);
        deleteToken();
        setAuth({});
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
