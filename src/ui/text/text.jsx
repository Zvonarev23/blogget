import classNames from "classnames";
import style from "./text.module.css";
import PropTypes from "prop-types";

export const Text = (props) => {
  const {
    As = "span",
    color = "black",
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    weight,
  } = props;

  const classes = classNames(
    className,
    style[color],
    { [style.center]: center },
    { [style[`fs${size}`]]: size },
    { [style[`fst${tsize}`]]: tsize },
    { [style[`fsd${dsize}`]]: dsize },
    { [style[`${weight}`]]: weight }
  );

  return (
    <As className={classes} href={href}>
      {children}
    </As>
  );
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
  center: PropTypes.bool,
  weight: PropTypes.string,
};
