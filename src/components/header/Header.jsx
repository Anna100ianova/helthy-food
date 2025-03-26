import style from "./Header.module.css";
import logo from "../icons/logo.svg";

export const Header = ({ openModal }) => {
  return (
    <>
      <header className={style.header}>
        <div className={style["header__left-block"]}>
          <div className={style.header__logo}>
            <img src={logo} alt="Логотип" />
          </div>
          <nav className={style.header__links}>
            <a href="#" className={style.header__link}>
              Доставка питания
            </a>
            <a href="#" className={style.header__link}>
              Второй пункт
            </a>
          </nav>
        </div>
        <div className={style["header__right-block"]}>
          <button onClick={openModal} className={style.btn}>
            Связаться с нами
          </button>
        </div>
      </header>
    </>
  );
};
