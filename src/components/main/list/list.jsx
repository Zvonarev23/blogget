import style from "./list.module.css";
import Post from "./post/index.jsx";

export const List = () => {
  const postsData = [
    {
      thumbnail: "",
      title: "Title",
      author: "Nickname",
      ups: 77,
      date: "2022-01-21T09:45:00.000Z",
    },
    {
      thumbnail: "",
      title: "Title2",
      author: "Nickname2",
      ups: 58,
      date: "2022-01-31T00:00:00.000Z",
    },
    {
      thumbnail: "",
      title: "Title3",
      author: "Nickname3",
      ups: 124,
      date: "2022-02-24T00:45:00.000Z",
    },
    {
      thumbnail: "",
      title: "Title4",
      author: "Nickname4",
      ups: 24,
      date: "2022-03-10T08:00:00.000Z",
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map((postData, index) => (
        <Post key={index} postData={postData} />
      ))}
    </ul>
  );
};
