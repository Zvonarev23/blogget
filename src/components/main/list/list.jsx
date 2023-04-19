import { useContext } from "react";
import style from "./list.module.css";
import Post from "./post/index.jsx";
import { PostContext } from "../../../context/post-context.jsx";

export const List = () => {
  const posts = useContext(PostContext);

  return (
    <ul className={style.list}>
      {posts.map((post, index) => (
        <Post key={index} post={post.data} />
      ))}
    </ul>
  );
};
