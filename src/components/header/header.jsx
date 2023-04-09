import React from "react";
import style from "./header.module.css";
import Layout from "../layout/";
import Logo from "./logo";
import Auth from "./auth";
import Search from "./search";
import Heading from "./heading";

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
