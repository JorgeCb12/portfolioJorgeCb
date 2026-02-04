import AboutMeBlock from "../components/bento/AboutMeBlock";
import HeroBlock from "../components/bento/HeroBlock";
import ProjectsBlock from "../components/bento/ProjectsBlock";
import StackBlock from "../components/bento/StackBlock";
import ExperienceBlock from "../components/bento/ExperienceBlock";
import ContactBlock from "../components/bento/ContactBlock";
import { BackgroundBoxes } from "../components/ui/BackgroundBoxes";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 relative w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute hidden md:block inset-0 w-full h-full bg-slate-950 z-0 overflow-hidden">
        <BackgroundBoxes />
      </div>

      <div className="grid grid-cols-1 container mx-auto xl:max-w-[1600px] lg:max-w-[1200px] md:grid-cols-2 lg:grid-cols-12 xl:grid-cols-12 gap-4 relative z-30 p-4 md:p-8 pointer-events-none">
        <HeroBlock className="col-span-1 md:col-span-1 lg:col-span-8 xl:col-span-5 row-span-1 xl:row-span-1 h-full p-6" />

        <StackBlock className="col-span-1 md:col-span-1 lg:col-span-4 xl:col-span-3 row-span-1 h-full p-4" />

        <ProjectsBlock className="col-span-1 md:col-span-1 lg:col-span-4 xl:col-span-4 row-span-1 h-full p-2" />

        <AboutMeBlock className="col-span-1 md:col-span-1 lg:col-span-4 xl:col-span-4 row-span-1 h-full p-2" />

        <ExperienceBlock className="col-span-1 md:col-span-1 lg:col-span-4 xl:col-span-3 row-span-1 xl:row-span-1 h-full p-2" />

        <ContactBlock className="col-span-1 md:col-span-1 lg:col-span-8 xl:col-span-5 row-span-1 h-full p-2" />
      </div>
    </div>
  );
};

export default Home;
