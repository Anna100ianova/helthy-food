import style from "./OfferSlider.module.css";

import imgPeper from "../img/slider/pepper.jpg";
import imgPaprika from "../img/slider/paprika.jpg";
import imgFood from "../img/slider/food-12.jpg";
import imgOlive from "../img/slider/olive-oil.jpg";
import iconsLeft from "../icons/left.svg";
import iconsRight from "../icons/right.svg";

export const OfferSlider = () => {
  return (
    <div className={style.offer__slider}>
      <div className={style["offer__slider-counter"]}>
        <div className={style["offer__slider-prev"]}>
          <img src={iconsLeft} alt="prev" />
        </div>
        <span id="current">03</span>/<span id="total">04</span>
        <div className={style["offer__slider-next"]}>
          <img src={iconsRight} alt="next" />
        </div>
      </div>
      <div className={style["offer__slider-wrapper"]}>
        <div className={style["offer__slider-inner"]}>
          <div className={style.offer__slide}>
            <img src={imgPeper} alt="pepper" />
          </div>
          {/* <div className="offer__slide">
            <img src={imgFood} alt="food" />
          </div>
          <div className="offer__slide">
            <img src={imgOlive} alt="oil" />
          </div>
          <div className="offer__slide">
            <img src={imgPaprika} alt="paprika" />
          </div> */}
        </div>
      </div>
    </div>
  );
};
