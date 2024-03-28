// import Hero from '@/components/Hero'
import AllFeatures from "@/components/AllFeatures";
import Demos from "@/components/Demos";
import Footer from "@/components/Footer";
import MostBenefits from "@/components/MostBenefits";
// import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurAchievements from "@/components/OurAchievements";
import SetupProcess from "@/components/SetupProcess";
import ShortFeatures from "@/components/ShortFeatures";
import SupremeFAQ from "@/components/SupremeFAQ";
import Test from "@/components/Test";
import WhyUs from "@/components/WhyUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero/> */}
      <Test />
      <ShortFeatures />
      <Demos/>
      <WhyUs />
      <SetupProcess />
      <AllFeatures />
      <OurAchievements/>
      <SupremeFAQ/>
      <MostBenefits/>
      <Footer/>
    </div>
  );
};

export default Home;
