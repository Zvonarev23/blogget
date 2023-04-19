import style from "./post.module.css";
import notphoto from "./img/notphoto.jpg";
import PropTypes from "prop-types";
import { formatDate } from "../../../../utils/formatDate";
import { ReactComponent as DeleteIcon } from "./img/delete.svg";
import Text from "../../../../ui/text/index.jsx";

export const Post = ({ post }) => {
  const { title, author, ups, created, thumbnail } = post;

  return (
    <li className={style.post}>
      <img
        className={style.img}
        src={thumbnail ? thumbnail : notphoto}
        alt={title}
      />
      <div className={style.content}>
        <Text As="h2" className={style.title}>
          <Text
            As="a"
            size={18}
            tsize={24}
            className={style.linkPost}
            href="#post"
          >
            {title}
          </Text>
        </Text>
        <Text
          As="a"
          size={12}
          tsize={14}
          color="orange"
          href="#author"
          className={style.linkAuthor}
        >
          {author}
        </Text>
      </div>

      <div className={style.rating}>
        <button className={style.up} aria-label="Повысить рейтинг"></button>
        <p className={style.ups}>{ups}</p>
        <button className={style.down} aria-label="Понизить рейтинг"></button>
      </div>

      <time className={style.date} dateTime={created}>
        {formatDate(created)}
      </time>

      <button className={style.delete}>
        <DeleteIcon />
      </button>
    </li>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};
