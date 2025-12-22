import AboutMeBlock from "../components/bento/AboutMeBlock";
import HeroBlock from "../components/bento/HeroBlock";
import ProjectsBlock from "../components/bento/ProjectsBlock";
import StackBlock from "../components/bento/StackBlock";
import GlassCard from "../components/UI/GlassCard";
import ExperienceBlock from "../components/bento/ExperienceBlock";
import ContactBlock from "../components/bento/ContactBlock";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-neutral-950 text-white p-4 w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/40 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/40 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>

        <div className="w-full max-w-7xl grid grid-cols-3 gap-2 relative z-10">
          <HeroBlock className="col-span-1 row-span-2 p-6" />

          <ProjectsBlock className="col-span-1 row-span-1 p-6" />

          <StackBlock className="col-span-1 row-span-1 p-6" />

          <AboutMeBlock className="col-span-1 row-span-3 p-6" />

          <ContactBlock className="col-span-1 row-span-3" />

          <ExperienceBlock className="col-span-1 row-span-2" />
        </div>
      </div>
    </>
  );
};

export default Home;
