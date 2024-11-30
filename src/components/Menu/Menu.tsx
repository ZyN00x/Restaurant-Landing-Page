import FoodTest from "@/assets/plates/kousa.jpg";
import { Card, CardContent, CardTitle } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Menu = () => {
  return (
    <>
      <div className="bg-black text-white flex flex-col justify-center gap-10">
        <h1 className="text-4xl underline text-center font-merienda">Menu</h1>
        <Carousel className="relative w-full max-w-xs  overflow-visible mx-16">
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardContent className="flex  gap-2 justify-center p-4 items-center">
                  <img
                    src={FoodTest}
                    alt="food"
                    className="rounded-lg w-fit h-fit"
                  />
                  <p className="font">Some authentic egyptian food</p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex justify-center p-4 items-center">
                  <img src={FoodTest} alt="food" className="rounded-lg" />
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem>
              <Card>
                <CardContent className="flex justify-center p-4 items-center">
                  <img src={FoodTest} alt="food" className="rounded-lg" />
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="border-2 border-orange-400 text-white bg-black hover:text-green-400 disabled:bg-gray-300 disabled:text-purple-200" />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default Menu;
