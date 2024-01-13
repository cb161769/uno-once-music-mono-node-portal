import { Button } from "@/components/ui/button";
import AudioIcon from "../../../assets/icons/audio-spectrum-icon.svg";
import MicIcon from "../../../assets/icons/mic-icon.svg";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section
      className={cn(
        "min-h-screen justify-between flex flex-col items-start pt-32 container bg-[url('assets/bg-hero-mobile.png')] relative bg-cover bg-top",
        "lg:flex-row lg:pt-0 lg:items-center lg:bg-[url('assets/bg-hero.png')] lg:bg-right"
      )}
    >
      <div className=" hidden lg:flex absolute top-0 bottom-0 left-0 right-[50%] bg-gradient-to-r from-black to-transparent" />
      {/* info */}
      <div className="relative text-center mx-auto lg:text-start lg:mx-0">
        <h2 className=" text-xl md:text-4xl font-medium">One Once Music</h2>
        <h1 className="text-4xl  md:text-[56px] max-w-[15ch] md:leading-[68px] font-semibold mt-[14px] bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent">
          Empowering Latin Music Professionals
        </h1>
        <p className=" mt-[30px]">We give life to music dreams</p>
        <div className=" mt-5 mx-auto">
          <Button>Get Started</Button>
          <Button variant={"ghost"}>Leer More</Button>
        </div>
      </div>
      <div className=" mx-auto lg:mx-0 mt-auto pb-16 grid grid-cols-3 gap-x-4 gap-y-10">
        <div className="hidden lg:flex flex-col items-center bg-[#2B0D0027] border border-white/20 py-12 px-8 rounded-lg backdrop-blur-md">
          <img src={MicIcon} alt="Mic Icon" />
          <span className=" text-[16px] opacity-55">Recording</span>
          <img src={AudioIcon} alt="Audio Icon" />
        </div>
        <div className="hidden lg:flex " />
        <div className="hidden lg:flex " />
        <Glassmorphism text="+2000" subtext="customers" />
        <Glassmorphism text="+20000" subtext="Hours Workshop" />
        <Glassmorphism text="+100M" subtext="listeners" />
      </div>
    </section>
  );
};

export default Hero;

const Glassmorphism = ({
  text,
  subtext,
}: {
  text: string;
  subtext: string;
}) => {
  return (
    <div className="flex flex-col items-center bg-[#2B0D0027] border border-white/20 py-3 px-10 rounded-lg backdrop-blur-md">
      <span className="text-[26px] whitespace-nowrap">{text}</span>
      <span className=" text-[16px] opacity-55 whitespace-nowrap">
        {subtext}
      </span>
    </div>
  );
};
