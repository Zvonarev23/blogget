import { useState, useEffect } from "react";
import style from "./tabs.module.css";
import { assignId } from "../../../utils/generateRandomId";
import { ReactComponent as ArrowIcon } from "./img/arrow.svg";
import { ReactComponent as HomeIcon } from "./img/home.svg";
import { ReactComponent as TopIcon } from "./img/top.svg";
import { ReactComponent as BestIcon } from "./img/best.svg";
import { ReactComponent as HotIcon } from "./img/hot.svg";
import { debounceRaf } from "../../../utils/debounce";

const LIST = [
  { value: "Главная", Icon: HomeIcon },
  { value: "Топ", Icon: TopIcon },
  { value: "Лучшие", Icon: BestIcon },
  { value: "Горячие", Icon: HotIcon },
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [currentListItem, setCurrentListItem] = useState("");

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    handleResize();
    window.addEventListener("resize", debounceResize);

    return () => {
      window.removeEventListener("resize", debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {currentListItem}
            <ArrowIcon width={15} height={15} />
          </button>
        </div>
      )}

      {(isDropdownOpen || !isDropdown) && (
        <ul onClick={() => setIsDropdownOpen(false)} className={style.list}>
          {LIST.map(({ value, id, Icon }) => (
            <li className={style.item} key={id}>
              <button
                className={style.btn}
                onClick={() => setCurrentListItem(value)}
              >
                {value}
                {Icon && <Icon width={30} height={30} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
