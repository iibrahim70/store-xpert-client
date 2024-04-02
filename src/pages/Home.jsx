// import Hero from "@/components/Hero";
import Test2 from "@/components/Test2";
import Navbar from "@/components/Navbar";
import AllFeatures from "@/components/AllFeatures";
import Demos from "@/components/Demos";
import Footer from "@/components/Footer";
import MostBenefits from "@/components/MostBenefits";
import OurAchievements from "@/components/OurAchievements";
import SetupProcess from "@/components/SetupProcess";
import ShortFeatures from "@/components/ShortFeatures";
import SupremeFAQ from "@/components/SupremeFAQ";
import WhyUs from "@/components/WhyUs";
import Marketing from "@/components/Marketing";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      {/* <Hero /> */}
      <Test2 />
      <ShortFeatures />
      <Demos />
      <WhyUs />
      <SetupProcess />
      <Marketing />
      <AllFeatures />
      <OurAchievements />
      <SupremeFAQ />
      <MostBenefits />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
