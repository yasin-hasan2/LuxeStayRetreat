import { Helmet } from "react-helmet-async";
import HeroSection from "../../components/Shared/sections/Hero";
import GetawaySection from "../../components/Shared/sections/GetawaySection";
import FeaturesSection from "../../components/Shared/sections/FeaturesSection";
import AmenitiesCarousel from "../../components/Shared/sections/AmenitiesCarousel";
import RoomsSection from "../../components/Shared/sections/RoomsSection";
import WineDownSection from "../../components/Shared/sections/WineDownSection";
import TestimonialSection from "../../components/Shared/sections/TestimonialSection";
// import Categories from "../../components/Categories/Categories";
// import Rooms from "../../components/Home/Rooms";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>LuxeStayRetreat | Vacation Homes & Condo Rentals</title>
      </Helmet>
      {/* Hero section */}
      <HeroSection />
      {/* GetawaySection */}
      <GetawaySection />
      {/* FeaturesSection */}
      <FeaturesSection />
      {/* AmenitiesCarousel.jsx  */}
      <AmenitiesCarousel />
      {/* RoomsSection  */}
      <RoomsSection />
      {/* WineDownSection.jsx  */}
      <WineDownSection />
      {/* TestimonialSection  */}
      <TestimonialSection />

      {/* Categories section  */}
      {/* <Categories /> */}
      {/* Rooms section */}
      {/* <Rooms /> */}
    </div>
  );
};

export default Home;
