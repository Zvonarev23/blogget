import React from "react";
import style from "./layout.module.css";

export const Layout = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};
