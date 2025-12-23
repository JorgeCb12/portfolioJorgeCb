import AboutMeBlock from "../components/bento/AboutMeBlock";
import HeroBlock from "../components/bento/HeroBlock";
import ProjectsBlock from "../components/bento/ProjectsBlock";
import StackBlock from "../components/bento/StackBlock";
import ExperienceBlock from "../components/bento/ExperienceBlock";
import ContactBlock from "../components/bento/ContactBlock";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-neutral-950 text-white p-4 md:p-8 flex justify-center items-center w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-800/40 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-800/40 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-cyan-600/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 xl:grid-cols-12 gap-4 relative z-10">
          <HeroBlock className="col-span-1 md:col-span-1 lg:col-span-4 xl:col-span-5 row-span-1 xl:row-span-1 h-full p-6" />

          <StackBlock className="col-span-1 md:col-span-1 lg:col-span-4 xl:col-span-3 row-span-1 h-full p-4" />

          <ProjectsBlock className="col-span-1 md:col-span-1 lg:col-span-4 xl:col-span-4 row-span-1 h-full p-2" />

          <AboutMeBlock className="col-span-1 md:col-span-1 lg:col-span-4 xl:col-span-4 row-span-1 h-full p-2" />

          <ExperienceBlock className="col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-3 row-span-1 xl:row-span-1 h-full p-2" />

          <ContactBlock className="col-span-1 md:col-span-1 lg:col-span-5 xl:col-span-5 row-span-1 h-full p-2" />
        </div>
      </div>
    </>
  );
};

export default Home;
