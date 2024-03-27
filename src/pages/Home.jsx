// import Hero from '@/components/Hero'
import AllFeatures from "@/components/AllFeatures";
import Demos from "@/components/Demos";
// import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SetupProcess from "@/components/SetupProcess";
import ShortFeatures from "@/components/ShortFeatures";
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
    </div>
  );
};

export default Home;
