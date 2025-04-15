import style from "./PreviewHeader.module.css";

export const PreviewHeader = ({ data, activeId, onClick }) => {
  return (
    <div className={style.tabheader}>
      <h3>Выберите стиль питания</h3>
      <div className={style.tabheader__items}>
        {data.map((menuItem) => {
          let className = style.tabheader__item;
          if (menuItem.id === activeId) {
            className += " " + style.tabheader__item_active;
          }
          return (
            <div
              key={menuItem.id}
              className={className}
              onClick={() => onClick(menuItem)}
            >
              {menuItem.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};
