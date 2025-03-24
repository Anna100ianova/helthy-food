import style from "./Footer.module.css";
import icon from "../icons/veg.svg";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.social}>
          <div className={style.subtitle}>Мы в социальных сетях:</div>
          <a href="#" className={style.link}>
            instagram
          </a>
          <a href="#" className={style.link}>
            facebook
          </a>
        </div>
        <div className={style.pepper}>
          <img src={icon} alt="pepper" />
        </div>
        <div className={style.call}>
          <div className={style.subtitle}>Или позвоните нам:</div>
          <a href="#" className={style.link}>
            +380678341034
          </a>
          <a href="#" className={style.link}>
            +380500941356
          </a>
        </div>
      </div>
    </footer>
  );
};
