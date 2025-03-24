import style from "./SidePanel.module.css";
import icon1 from "../icons/instagram.svg";
import icon2 from "../icons/facebook.svg";

export const SidePanel = () => {
  return (
    <>
      <div className={style.sidepanel}>
        <div className={style.sidepanel__text}>
          <span>Социальные сети</span>
        </div>
        <div className={style.sidepanel__divider}></div>
        <a href="#" className={style.sidepanel__icon}>
          <img src={icon1} alt="instagram" />
        </a>
        <a href="#" className={style.sidepanel__icon}>
          <img src={icon2} alt="facebook" />
        </a>
      </div>
    </>
  );
};
