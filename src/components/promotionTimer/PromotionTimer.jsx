import style from "./PromotionTimer.module.css";

export const PromotionTimer = () => {
  return (
    <div className={style.promotion__timer}>
      <div className={style.title}>Осталось до конца акции:</div>
      <div className={style.timer}>
        <div className={style.timer__block}>
          <span id="days">12</span>
          дней
        </div>
        <div className={style.timer__block}>
          <span id="hours">20</span>
          часов
        </div>
        <div className={style.timer__block}>
          <span id="minutes">56</span>
          минут
        </div>
        <div className={style.timer__block}>
          <span id="seconds">20</span>
          секунд
        </div>
      </div>
    </div>
  );
};
