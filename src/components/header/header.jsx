import style from "./header.module.css";
import Layout from "../layout/index.jsx";
import Logo from "./logo/index.jsx";
import Auth from "./auth/index.jsx";
import Search from "./search/index.jsx";
import Heading from "./heading/index.jsx";

export const Header = () => {
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <Heading text="Главная" />
          <Search />
          <Auth auth={false} />
        </div>
      </Layout>
    </header>
  );
};
