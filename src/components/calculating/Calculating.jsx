import style from "./Calculating.module.css";
import { useState } from "react";

const ACTIVITY = {
  low: 1.2,
  middle: 1.375,
  high: 1.55,
  extraHigh: 1.75,
};

export const Calculating = () => {
  const [selectedSex, setSelectedSex] = useState("female");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [selectedActivity, setSelectedActivity] = useState(ACTIVITY.low);

  function calcTotal() {
    if (!age || !height || !weight) {
      return "__";
    }
    if (selectedSex === "female") {
      return Math.round(
        (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * selectedActivity
      );
    }

    return Math.round(
      (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * selectedActivity
    );
  }

  const result = calcTotal();

  return (
    <div className={style.calculating}>
      <div className={style.container}>
        <h2 className={style.title}>Рассчитаем вашу потребность в калориях?</h2>
        <div className={style.calculating__field}>
          <div className={style.calculating__subtitle}>Ваш пол</div>
          <div className={style.calculating__choose} id="gender">
            <div
              onClick={() => setSelectedSex("female")}
              className={`${style["calculating__choose-item"]} ${
                selectedSex === "female"
                  ? style["calculating__choose-item_active"]
                  : ""
              }`}
            >
              Женщина
            </div>
            <div
              onClick={() => setSelectedSex("male")}
              data-sex="male"
              className={`${style["calculating__choose-item"]} ${
                selectedSex === "male"
                  ? style["calculating__choose-item_active"]
                  : ""
              }`}
            >
              Мужчина
            </div>
          </div>

          <div className={style.calculating__subtitle}>Ваша конституция</div>
          <div
            className={`${style.calculating__choose} ${style.calculating__choose_medium}`}
          >
            <input
              onChange={(e) => {
                setHeight(e.target.value);
              }}
              type="text"
              value={height}
              id="height"
              placeholder="Введите рост"
              className={style["calculating__choose-item"]}
            />
            <input
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
              placeholder="Введите вес"
              className={style["calculating__choose-item"]}
            />
            <input
              type="text"
              id="age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
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
              onClick={() => setSelectedActivity(ACTIVITY.low)}
              className={`${style["calculating__choose-item"]} ${
                selectedActivity === ACTIVITY.low
                  ? style["calculating__choose-item_active"]
                  : ""
              }`}
            >
              Низкая активность
            </div>
            <div
              onClick={() => setSelectedActivity(ACTIVITY.middle)}
              className={`${style["calculating__choose-item"]} ${
                selectedActivity === ACTIVITY.middle
                  ? style["calculating__choose-item_active"]
                  : ""
              }`}
            >
              Невысокая активность
            </div>
            <div
              onClick={() => setSelectedActivity(ACTIVITY.high)}
              className={`${style["calculating__choose-item"]} ${
                selectedActivity === ACTIVITY.high
                  ? style["calculating__choose-item_active"]
                  : ""
              }`}
            >
              Умеренная активность
            </div>
            <div
              onClick={() => setSelectedActivity(ACTIVITY.extraHigh)}
              className={`${style["calculating__choose-item"]} ${
                selectedActivity === ACTIVITY.extraHigh
                  ? style["calculating__choose-item_active"]
                  : ""
              }`}
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
              <span
                style={{
                  color: result === "__" ? "red" : "#000",
                }}
              >
                {result}
              </span>
              ккал
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
