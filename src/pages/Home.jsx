// import Hero from '@/components/Hero'
import Navbar from "@/components/Navbar";
import SetupProcess from "@/components/SetupProcess";
import ShortFeatures from "@/components/ShortFeatures";
import Test from "@/components/Test";
import WhyUs from "@/components/WhyUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Test />
      <ShortFeatures />
      {/* <Hero/> */}
      <WhyUs />
      <SetupProcess/>
    </div>
  );
};

export default Home;
