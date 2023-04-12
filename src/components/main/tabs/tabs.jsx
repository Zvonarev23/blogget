import style from "./tabs.module.css";

export const Tabs = () => {
  return (
    <ul className={style.list}>
      <li>
        <a href="/">Главная</a>
      </li>
      <li>
        <a href="/">Просмотренные</a>
      </li>
      <li>
        <a href="/">Сохраненные</a>
      </li>
      <li>
        <a href="/">Мои посты</a>
      </li>
    </ul>
  );
};
