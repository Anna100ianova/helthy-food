import style from "./PreviewItem.module.css";

export const PreviewItem = ({ img, desc }) => {
  return (
    <div className={style.tabcontent}>
      <img src={img} alt="vegy" />
      <div className={style.tabcontent__descr}>{desc}</div>
    </div>
  );
};
