import { PromotionTimer } from "../promotionTimer/PromotionTimer";

import style from "./Promotion.module.css";

export const Promotion = () => {
  return (
    <div className={style.promotion}>
      <div className={style.bgc_y}></div>
      <div className={style.container}>
        <div className={style.promotion__text}>
          <div className={style.title}>Акция для новых клиентов!</div>
          <div className={style.promotion__descr}>
            Мы ценим каждого клиента и предлагаем вам стать одним из них на
            очень выгодных условиях. Каждому, кто закажет доставку питание на
            неделю, будет предоставлена скидка в размере <span>20%!</span>
            <br />
            <br />
            Акция закончится 20 мая в 00:00
          </div>
        </div>
        <PromotionTimer />
      </div>
    </div>
  );
};
