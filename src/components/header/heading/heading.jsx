import React from "react";
import style from "./heading.module.css";

export const Heading = ({ text }) => {
  return <h1 className={style.heading}>{text}</h1>;
};
