import Test2 from "@/components/Test2";
import AllFeatures from "@/components/AllFeatures";
import Templates from "@/components/Templates";
import OurAchievements from "@/components/OurAchievements";
import SetupProcess from "@/components/SetupProcess";
import ShortFeatures from "@/components/ShortFeatures";
import SupremeFAQ from "@/components/SupremeFAQ";
import WhyUs from "@/components/WhyUs";
import Marketing from "@/components/Marketing";
import Testimonials from "@/components/Testimonials";
import TemplateHighlights from "@/components/TemplateHighlights";

const Home = () => {
  return (
    <div className="bg-gray-50/50">
      {/* <Hero /> */}
      <Test2 />
      <ShortFeatures />
      <Templates />
      <WhyUs />
      <SetupProcess />
      <Marketing />
      <AllFeatures />
      <OurAchievements />
      <SupremeFAQ />
      <Testimonials />
      <TemplateHighlights/>
    </div>
  );
};

export default Home;
