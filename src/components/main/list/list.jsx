import style from "./list.module.css";
import Post from "./post/index.jsx";

export const List = () => {
  const postData = {
    thumbnail: "",
    title: "Title",
    author: "Nickname",
    ups: 24,
    date: "2022-02-24T09:45:00.000Z",
  };

  return (
    <ul className={style.list}>
      <Post postData={postData} />
    </ul>
  );
};
