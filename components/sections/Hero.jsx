import Button from "../Button";
import { arrowRight } from "@/public/assets/icons";
import { shoes, statistics } from "@/constants/index";
import ShoeBanner from "../ShoeBanner";

const Hero = () => {
  return (
    <section
      id="home"
      className=" w-full flex flex-col justify-center min-h-screen gap-10 max-container xl:flex-row"
    >
      <div className=" relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
        <p className=" text-xl font-montserrat text-coral-red">
          our Summer Collection
        </p>
        <h1 className=" mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className=" xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>{" "}
          <br />
          <span className=" text-coral-red inline-block mt-3 ">Nike</span> Shoes
        </h1>
        <p className=" font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
          Discover Stylish Nike arrivals, quality comfort, and Innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />

        <div className=" flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stats, i) => (
            <div key={i}>
              <p className=" text-4xl font-palanquin font-bold ">
                {stats.value}
              </p>
              <p className=" leading-7 font-montserrat text-slate-gray ">
                {stats.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ShoeBanner />
    </section>
  );
};

export default Hero;
