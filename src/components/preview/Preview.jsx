import style from "./Preview.module.css";
import { PreviewItem } from "../previewItem/PreviewItem";
import { PreviewHeader } from "../previewHeader/PreviewHeader";

export const Preview = () => {
  return (
    <>
      <div className={style.preview}>
        <div className={style.bgc_blue} />
        <div className={style.container}>
          <div className={style.tabcontainer}>
            <PreviewItem />
            <PreviewHeader />
          </div>
          <div className={style.preview__life}>Живи полной жизнью!</div>
        </div>
      </div>
    </>
  );
};
