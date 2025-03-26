import style from "./Modal.module.css";
import ReactDOM from "react-dom";

export const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const rendered = (
    <div className={style.modal} onClick={(e) => e.stopPropagation()}>
      <div className={style.modal__dialog}>
        <div className={style.modal__content}>
          <button data-close className={style.modal__close} onClick={onClose}>
            &times;
          </button>
          <form action="#">
            <div className={style.modal__title}>
              Мы свяжемся с вами как можно быстрее!
            </div>
            <input
              required
              placeholder="Ваше имя"
              name="name"
              type="text"
              className={style.modal__input}
            />
            <input
              required
              placeholder="Ваш номер телефона"
              name="phone"
              type="phone"
              className={style.modal__input}
            />
            <button
              className={`${style.btn} ${style.btn_dark} ${style.btn_min}`}
            >
              Перезвонить мне
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(rendered, document.getElementById("modal-root"));
};
