import style from "./Calculating.module.css";

export const Calculating = () => {
  return (
    <div className={style.calculating}>
      <div className={style.container}>
        <h2 className={style.title}>Рассчитаем вашу потребность в калориях?</h2>
        <div className={style.calculating__field}>
          <div className={style.calculating__subtitle}>Ваш пол</div>
          <div className={style.calculating__choose} id="gender">
            <div
              id="female"
              className={`${style["calculating__choose-item"]} ${style["calculating__choose-item_active"]}`}
            >
              Женщина
            </div>
            <div id="male" className={style["calculating__choose-item"]}>
              Мужчина
            </div>
          </div>

          <div className={style.calculating__subtitle}>Ваша конституция</div>
          <div
            className={`${style.calculating__choose} ${style.calculating__choose_medium}`}
          >
            <input
              type="text"
              id="height"
              placeholder="Введите рост"
              className={style["calculating__choose-item"]}
            />
            <input
              type="text"
              id="weight"
              placeholder="Введите вес"
              className={style["calculating__choose-item"]}
            />
            <input
              type="text"
              id="age"
              placeholder="Введите возраст"
              className={style["calculating__choose-item"]}
            />
          </div>

          <div className={style.calculating__subtitle}>
            Выберите вашу физическая активность
          </div>
          <div
            className={`${style.calculating__choose} ${style["calculating__choose_big"]}`}
          >
            <div
              data-ratio="1.2"
              id="low"
              className={style["calculating__choose-item"]}
            >
              Низкая активность
            </div>
            <div
              data-ratio="1.375"
              id="small"
              className={`${style["calculating__choose-item"]} ${style["calculating__choose-item_active"]}`}
            >
              Невысокая активность
            </div>
            <div
              data-ratio="1.55"
              id="medium"
              className={style["calculating__choose-item"]}
            >
              Умеренная активность
            </div>
            <div
              data-ratio="1.725"
              id="high"
              className={style["calculating__choose-item"]}
            >
              Высокая активность
            </div>
          </div>

          <div className={style.calculating__divider}></div>

          <div className={style.calculating__total}>
            <div className={style.calculating__subtitle}>
              Ваша суточная норма калорий:
            </div>
            <div className={style.calculating__result}>
              <span>2700</span> ккал
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
