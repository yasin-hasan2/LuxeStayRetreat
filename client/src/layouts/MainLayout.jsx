import { Outlet } from "react-router-dom";
// import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import Navigation from "../components/Shared/Navbar/Navbar1";
// import AnimatedCursor from "react-animated-cursor";
const Main = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="absolute">
        <Navigation />
      </div>
      <div className="pt-24 min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      <Footer />
      {/* <AnimatedCursor
      // innerSize={8}
      // outerSize={40}
      // innerScale={1}
      // outerScale={2}
      // outerAlpha={0}
      // hasBlendMode={true}
      // innerStyle={{
      //   backgroundColor: "var(--cursor-color)",
      // }}
      // outerStyle={{
      //   border: "3px solid var(--cursor-color)",
      // }}
      /> */}
    </div>
  );
};

export default Main;
