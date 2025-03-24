import style from "./PreviewItem.module.css";
import imgElite from "../img/tabs/elite.jpg";
import imgHamburger from "../img/tabs/hamburger.jpg";
import imgPost from "../img/tabs/post.jpg";
import imgVegy from "../img/tabs/vegy.jpg";

const dataPreview = [
  {
    img: imgElite,
    desc: "Меню 'Премиум' - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
  },
  {
    img: imgHamburger,
    desc: "Меню 'Сбалансированное' - это соответствие вашего рациона всем  научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.",
  },
  {
    img: imgPost,
    desc: "Наше специальное 'Постное меню' - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!",
  },
  {
    img: imgVegy,
    desc: "Меню 'Фитнес' - это новый подход к приготовлению блюд: большe свежих овощей и фруктов. Для людей, которые интересуются спортом, активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
  },
];

export const PreviewItem = () => {
  return (
    <div className={style.tabcontent}>
      <img src={dataPreview[3].img} alt="vegy" />
      <div className={style.tabcontent__descr}>{dataPreview[3].desc}</div>
    </div>
  );
};
