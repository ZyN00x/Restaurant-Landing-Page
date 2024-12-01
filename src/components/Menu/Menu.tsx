import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FoodMenu } from "./FoodMenu";
import { Card, CardContent } from "../ui/card";

const Menu = () => {
  return (
    <>
      <div className="bg-black text-white">
        <h1 className="font-merienda text-4xl underline text-center p-3">
          Our Menu
        </h1>
        <Carousel className="bg-black text-white max-w-2xl max-h-2xl mx-auto">
          <div className="flex flex-col">
            <CarouselContent>
              {FoodMenu.map((food, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 flex justify-center items-center gap-3">
                    <Card className="bg-black text-orange-400  w-[3000px]">
                      <CardContent>
                        <div className="flex flow-row w-fit">
                          <img
                            src={food.image}
                            className="w-[300px] p-2 rounded-3xl"
                            alt="food image"
                          />
                          <div className="flex flex-col gap-1 p-3">
                            <p className="font-merienda text-center text-lg underline">
                              {food.name}
                            </p>
                            <p className="italic text-gray-100 text-center">
                              "{food.description}."
                            </p>
                            <p className=" text-center">
                              <span className="font-semibold font-sans text-xl">
                                Price{": "}
                              </span>
                              <span className="font-merienda underline text-xl mx-4 text-white">
                                {" "}
                                {food.price} EGP
                              </span>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <CarouselNext className="text-white bg-black" />
          <CarouselPrevious className="text-white bg-black" />
        </Carousel>
      </div>
    </>
  );
};

export default Menu;
