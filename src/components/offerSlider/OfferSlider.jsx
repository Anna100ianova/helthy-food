import style from "./OfferSlider.module.css";

import imgPeper from "../img/slider/pepper.jpg";
import imgPaprika from "../img/slider/paprika.jpg";
import imgFood from "../img/slider/food-12.jpg";
import imgOlive from "../img/slider/olive-oil.jpg";
import iconsLeft from "../icons/left.svg";
import iconsRight from "../icons/right.svg";
import { useState } from "react";

const dataSlider = [
  { img: imgPeper, id: 1 },
  { img: imgPaprika, id: 2 },
  { img: imgFood, id: 3 },
  { img: imgOlive, id: 4 },
];

export const OfferSlider = () => {
  const [activeSlide, setSlide] = useState(dataSlider[0]);
  const changeSlide = (i) => {
    const activeSlideIndex = dataSlider.findIndex(
      (item) => item.id === activeSlide.id
    );
    let nextIndex = activeSlideIndex + i;
    if (nextIndex > 3) {
      nextIndex = 0;
    }
    if (nextIndex < 0) {
      nextIndex = 3;
    }
    setSlide(dataSlider[nextIndex]);
  };

  return (
    <div className={style.offer__slider}>
      <div className={style["offer__slider-counter"]}>
        <div
          className={style["offer__slider-prev"]}
          onClick={() => changeSlide(-1)}
        >
          <img src={iconsLeft} alt="prev" />
        </div>
        <span id="current">{`0${activeSlide.id}`}</span>/
        <span id="total">04</span>
        <div
          className={style["offer__slider-next"]}
          onClick={() => changeSlide(+1)}
        >
          <img src={iconsRight} alt="next" />
        </div>
      </div>
      <div className={style["offer__slider-wrapper"]}>
        <div className={style["offer__slider-inner"]}>
          <div className={style.offer__slide}>
            <img src={activeSlide.img} alt="pepper" />
          </div>
        </div>
      </div>
    </div>
  );
};
