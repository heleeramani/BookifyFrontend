import React from "react";
import BookCategory from "../component/home/component/BookCategory";
import FeaturesSection from "../component/home/component/FeaturesSection";
import Slider from "../component/home/component/Slider";
import Elementor from "../component/home/component/Elementor";
import DiscoverBook from "../component/home/component/DiscoverBook";
import AuthorUpdate from "../component/home/component/AuthorUpdate";
import ReadingBanner from "../component/home/component/ReadingBanner";
import BestSeller from "../component/home/component/BestSeller";
import MostRecentArtical from "../component/home/component/MostRecentArtical";
import BokInfo from "../component/Shop/component/BookInfo";
import ShopList from "../component/Shop/component/ShopList";
import Profile from "../component/navbar/Profile";
import AddWishlist from "../component/wishlist/component/Addwishlist";
import SubscriptionCard from "./SubscriptionCard";
import Review from "../component/review/Review";
const Home = () => {
  return (
    <div>
      <Slider />
      {/* Wrap BookCategory in a div with an id */}
      <div id="book-category">
        <BookCategory />
      </div>
      <FeaturesSection />
      <Elementor />
      <DiscoverBook />
      <AuthorUpdate />
      <ReadingBanner />
      <BestSeller />
      <MostRecentArtical />

      <SubscriptionCard />
      {/* <BokInfo /> */}
      {/* <ShopList /> */}
      {/* <Profile/> */}
      {/* <AddWishlist /> */}
      {/* <Review /> */}
    </div>
  );
};

export default Home;
