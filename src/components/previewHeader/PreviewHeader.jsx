import style from "./PreviewHeader.module.css";

export const PreviewHeader = () => {
  return (
    <div className={style.tabheader}>
      <h3>Выберите стиль питания</h3>
      <div className={style.tabheader__items}>
        <div
          className={`${style.tabheader__item} ${style.tabheader__item_active}`}
        >
          Фитнес
        </div>
        <div className={style.tabheader__item}>Премиум</div>
        <div className={style.tabheader__item}>Постное</div>
        <div className={style.tabheader__item}>Сбалансированное</div>
      </div>
    </div>
  );
};
