import style from "./Order.module.css";
import iconsRight from "../icons/right.svg";

export const Order = () => {
  return (
    <div className={style.order}>
      <div className={style.container}>
        <div className={style.title}>Заказывай пробный день прямо сейчас!</div>
        <form action="#" className={style.order__form}>
          <input
            required
            placeholder="Ваше имя"
            name="name"
            type="text"
            className={style.order__input}
          />
          <input
            required
            placeholder="Ваш номер телефона"
            name="phone"
            type="phone"
            className={style.order__input}
          />
          <img src={iconsRight} alt="right" />
          <button className={`${style.btn} ${style.btn_dark} ${style.btn_min}`}>
            Перезвонить мне
          </button>
        </form>
      </div>
    </div>
  );
};
