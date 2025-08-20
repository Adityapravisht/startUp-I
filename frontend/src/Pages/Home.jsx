import MyNewCarousel from "../components/functionalities/MyCrousel";
import BothCards from "../components/layout/bothCards";
import CommentCarousel from "../components/functionalities/CommentCrousel";
import ImageSlider from "../components/functionalities/ImageSlider";
import BookViewer from "../components/functionalities/BookViewer";
import { FooterBg } from "../components/navigation/FooterBg";

const Home = () => {
  return (
    <div>
      <CommentCarousel />
      <BothCards />
      <MyNewCarousel />
      <ImageSlider />
      <BookViewer />

      <FooterBg />
    </div>
  );
};

export default Home;
