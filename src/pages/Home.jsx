import Hero from "@/components/Hero";
import ShortFeatures from "@/components/ShortFeatures";
import AllFeatures from "@/components/AllFeatures";
import Templates from "@/components/Templates";
import OurAchievements from "@/components/OurAchievements";
import SetupProcess from "@/components/SetupProcess";
import SupremeFAQ from "@/components/SupremeFAQ";
import WhyUs from "@/components/WhyUs";
import Marketing from "@/components/Marketing";
import Testimonials from "@/components/Testimonials";
import TemplateHighlights from "@/components/TemplateHighlights";

const Home = () => {
  return (
    <div className="bg-white select-none">
      <Hero />
      <ShortFeatures />
      <Templates />
      <WhyUs />
      <SetupProcess />
      <Marketing />
      <AllFeatures />
      <TemplateHighlights />
      <OurAchievements />
      <SupremeFAQ />
      <Testimonials />
    </div>
  );
};

export default Home;
