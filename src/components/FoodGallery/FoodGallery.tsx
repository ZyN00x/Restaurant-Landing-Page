import { motion } from "framer-motion";
import Food1 from "@/assets/plates/ful.jpeg";
import Food2 from "@/assets/plates/kousa.jpg";
import Food3 from "@/assets/plates/mahshy.jpeg";
import Food4 from "@/assets/plates/sweet.jpg";
import Food5 from "@/assets/plates/falafel.jpg";
import Food6 from "@/assets/plates/koshary.jpg";

const FoodGallery = () => {
  const foodImages: string[] = [Food1, Food2, Food3, Food4, Food5, Food6];

  return (
    <div className="overflow-hidden bg-black p-10">
      <h1 className="text-4xl underline font-merienda font-bold text-center py-5 text-white">
        Our Food
      </h1>
      <motion.div
        className=" relative flex gap-8 my-3"
        initial={{ x: "10%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
          delay: 0.1,
        }}
      >
        {[...foodImages, ...foodImages].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Food ${index + 1}`}
            className="h-40 w-auto rounded-md shadow-md"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default FoodGallery;
