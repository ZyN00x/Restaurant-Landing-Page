import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FoodGallery from "./components/FoodGallery/FoodGallery";
import Menu from "./components/Menu/Menu";
function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FoodGallery />
      <Menu />
    </>
  );
}

export default Homepage;
