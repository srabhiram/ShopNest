import { Carousel } from "flowbite-react";
import { Outlet } from "react-router-dom";
import crsl from "../assets/crsl1.jpg";
import crsl2 from "../assets/crsl2.jpg";
import crsl3 from "../assets/crsl3.jpg";
import { useState, useEffect } from "react";
import { SklLanding } from "./Skeleton/SklLanding";

export const Landingpage = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1800);
  }, [loader]);

  return loader ? (
    <SklLanding />
  ) : (
    <>
      <div className=" max-sm:h-56 h-[36rem] cursor-default w-full pb-3 mt-1 mb-4 border-b">
        <Carousel slideInterval={1200} className="cursor-none">
          <div className="relative h-full w-full">
            <img src={crsl} alt="carousel1" className="h-full  w-full " />

            <div className="absolute top-1/4 left-1/2 right-0 flex w-fit flex-col justify-start leading-[4.5rem] text-stone-100">
              <div>
                <p className="md:text-[4rem] max-sm:text-[1.2rem] leading-normal ml-1.5 font-semibold">
                  Biggest Summer Sale
                </p>
                <p className="md:text-[6rem] max-sm:text-2xl flex items-center font-semibold">
                  50-80
                  <span className="text-xl md:flex flex-col max-sm:text-sm max-sm:leading-none items-start">
                    % <span className="text-[10px] uppercase">*off</span>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <img src={crsl2} alt="carousel1" className="h-full  w-full " />

          <div className="relative h-full w-full">
            <img src={crsl3} alt="carousel1" className="h-full  w-full " />

            <div className="absolute top-1/4 left-[15%] right-[40%] flex w-fit flex-col justify-start leading-[4.5rem] text-slate-800">
              <div>
                <p className="md:text-[4rem] max-sm:text-2xl leading-normal ml-1.5 font-semibold">
                  All Over India
                </p>
                <p className="md:text-[6rem] max-sm:text-2xl flex items-center font-semibold">
                  Free Delivery
                  <span className="text-xl md:flex flex-col max-sm:text-sm max-sm:leading-none items-start">
                    <span className="text-[10px] uppercase"></span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <section className=" bg-white text-lg px-2 pb-3 w-full ">
        <p className="font-bold text-2xl">Trenidng Now</p>
      </section>

      <Outlet />
    </>
  );
};
