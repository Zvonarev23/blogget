import style from "./layout.module.css";
import PropTypes from "prop-types";

export const Layout = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node,
};
