import style from "./Menu.module.css";

export const Menu = () => {
  return (
    <div className={style.menu}>
      <h2 className={style.title}>Наше меню на день</h2>

      <div className={style.menu__field}>
        <div className={style.container}></div>
      </div>
    </div>
  );
};
