import { OfferSlider } from "../offerSlider/OfferSlider";

import style from "./Offer.module.css";

export const Offer = () => {
  return (
    <div className={style.offer}>
      <div className={style.bgc_y}></div>
      <div className={style.container}>
        <div className={style.offer__text}>
          <h2 className={style.title}>Что мы можем вам предложить?</h2>
          <div className={style.offer__descr}>
            Наша основная идея - это правильное питание. Оно может быть простым
            и вкусным. Мы не просто доставка, мы сервис! Мы взяли на себя все
            расчеты БЖУ, калорийности, объемов порций и прочие важные, но
            скучные аспекты. Вам остается только полезная, сытная и правильная
            еда, которую мы привозим прямо под дверь.
          </div>
        </div>
        <div className={style.offer__action}>
          <button data-modal className={`${style.btn} ${style.btn_dark}`}>
            Связаться с нами
          </button>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.offer__advantages}>
          <h2>Быстро и полезно</h2>
          <div className={style["offer__advantages-text"]}>
            Готовка дома занимает много сил, времени и нервов. Мы привозим еду
            сразу на целый день, и ты можешь действовать так, как тебе удобно,
            не подстраиваясь ни под кого и будучи уверенным в качестве продукта!
          </div>
          <h2>Правильный рацион</h2>
          <div className={style["offer__advantages-text"]}>
            Мы разработали специальное меню, где учтены все нюансы правильного
            питания, от баланса БЖУ до их приготовления и дробления рациона.
          </div>
        </div>
        <OfferSlider />
      </div>
    </div>
  );
};
