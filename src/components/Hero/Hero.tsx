import Egyfood from "@/assets/EgyFood.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Hero = () => {
  return (
    <Card className=" w-fill bg-orange-500 p-0 m-0 rounded-none">
      <CardHeader className="flex flex-row justify-start">
        <CardTitle className="text-center flex-grow  font-merienda font-extrabold text-4xl">
          About Us
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row font-merienda">
        <img
          src={Egyfood}
          alt="egyptian food"
          className=" w-50 h-44 rounded-md mx-auto -my-10"
        />
        <section className="mx-5 font-merienda">
          At EgyFood Delights, we’re all about sharing the love for authentic
          Egyptian cuisine. From the comforting flavors of koshari to the sweet
          indulgence of basbousa, every dish is a celebration of Egypt’s rich
          culinary heritage. We’re passionate about bringing people together
          over great food in a warm, friendly space. Whether you're craving a
          taste of home or trying Egyptian food for the first time, we promise
          an experience filled with fresh ingredients, bold spices, and
          unforgettable flavors. Come join us, and let’s make every meal a
          journey through Egypt’s vibrant culture!
        </section>
      </CardContent>
    </Card>
  );
};

export default Hero;
