import Text from "../../../ui/text/index.jsx";
import style from "./heading.module.css";
import PropTypes from "prop-types";

export const Heading = ({ text }) => {
  return (
    <Text As="h1" center size={22} tsize={26} className={style.heading}>
      {text}
    </Text>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};
