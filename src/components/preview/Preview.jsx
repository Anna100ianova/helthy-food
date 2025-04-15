import style from "./Preview.module.css";
import { useState } from "react";
import { PreviewItem } from "../previewItem/PreviewItem";
import { PreviewHeader } from "../previewHeader/PreviewHeader";

import imgElite from "../img/tabs/elite.jpg";
import imgHamburger from "../img/tabs/hamburger.jpg";
import imgPost from "../img/tabs/post.jpg";
import imgVegy from "../img/tabs/vegy.jpg";

const dataPreview = [
  {
    id: 1,
    title: "Премиум",
    img: imgElite,
    desc: "Меню 'Премиум' - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
  },
  {
    id: 2,
    title: "Сбалансированное",
    img: imgHamburger,
    desc: "Меню 'Сбалансированное' - это соответствие вашего рациона всем  научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.",
  },
  {
    id: 3,
    title: "Постное",
    img: imgPost,
    desc: "Наше специальное 'Постное меню' - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!",
  },
  {
    id: 4,
    title: "Фитнес",
    img: imgVegy,
    desc: "Меню 'Фитнес' - это новый подход к приготовлению блюд: большe свежих овощей и фруктов. Для людей, которые интересуются спортом, активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
  },
];

export const Preview = () => {
  const [activeElem, setMenuItem] = useState(dataPreview[0]);

  return (
    <>
      <div className={style.preview}>
        <div className={style.bgc_blue} />
        <div className={style.container}>
          <div className={style.tabcontainer}>
            <PreviewItem img={activeElem.img} desc={activeElem.desc} />
            <PreviewHeader
              data={dataPreview}
              activeId={activeElem.id}
              onClick={setMenuItem}
            />
          </div>
          <div className={style.preview__life}>Живи полной жизнью!</div>
        </div>
      </div>
    </>
  );
};
