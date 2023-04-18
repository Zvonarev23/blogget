import { useEffect, useState } from "react";
import { URL_API } from "../api/const.js";

export const useAuth = (token) => {
  const [auth, setAuth] = useState({});

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
        setAuth({});
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
