import MyNewCarousel from "../components/functionalities/MyCrousel";
import BothCards from "../components/layout/bothCards";
import CommentCarousel from "../components/functionalities/CommentCrousel";
import ImageSlider from "../components/functionalities/ImageSlider";
import BookViewer from "../components/functionalities/BookViewer";
import TrendingNews from "../components/atoms/TrendingNew";
import Suggestions from "../components/atoms/Suggestions";
import Menu from "../components/atoms/Menu";
import { FooterBg } from "../components/navigation/FooterBg";
import HomeTop from "../components/atoms/HomeTop";

const Home = () => {
  return (
    <div>
      <HomeTop />
      {/* <ImageSlider /> */}
      <Suggestions />
      <MyNewCarousel />
      <CommentCarousel />
      <TrendingNews />
      <BothCards />
      <BookViewer />
      <FooterBg />
    </div>
  );
};

export default Home;
