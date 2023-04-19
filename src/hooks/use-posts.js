import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../context/token-context.jsx";
import { URL_API } from "../api/const.js";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const { token } = useContext(TokenContext);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`, {
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
      .then((data) => setPosts(data.data.children))
      .catch((err) => console.error(err));
  }, [token]);

  return [posts];
};
