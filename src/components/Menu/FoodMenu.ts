import ful from "@/assets/plates/ful.jpeg";
import koshary from "@/assets/plates/koshary.jpg";
import kosa from "@/assets/plates/kousa.jpg";
import harisa from "@/assets/plates/sweet.jpg";
import mahshy from "@/assets/plates/mahshy.jpeg";

type foodmenu = {
  name: string;
  image: string;
  description: string;
  price: number;
};

export const FoodMenu: foodmenu[] = [
  {
    name: "Egyptian Fava Beans",
    image: `${ful}`,
    description:
      "A traditional Egyptian dish made with fava beans, olive oil, garlic, and spices, offering a hearty and flavorful experience.",
    price: 50,
  },
  {
    name: "Koshary",
    image: `${koshary}`,
    description:
      "A popular Egyptian comfort food combining rice, lentils, pasta, and fried onions, topped with a tangy tomato sauce.",
    price: 55,
  },
  {
    name: "Kosa",
    image: `${kosa}`,
    description:
      "Zucchini stuffed with a savory mixture of rice, minced meat, and spices, creating a deliciously tender and flavorful dish.",
    price: 145,
  },
  {
    name: "Mahshy",
    image: `${mahshy}`,
    description:
      "A variety of vegetables, such as grape leaves or zucchini, filled with a seasoned rice and meat mixture, offering a wholesome taste",
    price: 350,
  },
  {
    name: "Harisa",
    image: `${harisa}`,
    description:
      "A sweet semolina-based dessert with a rich syrup and nut topping, perfect for satisfying your sweet cravings.",
    price: 50,
  },
];
