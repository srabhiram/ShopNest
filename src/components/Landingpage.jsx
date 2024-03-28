import { Carousel } from "flowbite-react";
import { Outlet } from "react-router-dom";
import crsl from "../assets/crsl1.jpg";
import crsl2 from "../assets/crsl2.jpg";
import crsl3 from "../assets/crsl3.jpg";
export const Landingpage = () => {
  return (
    <>
      <div className=" max-sm:h-56 h-[41rem] w-full pb-3 mb-4 border-b">
        <Carousel>
          <img
            src={crsl}
            alt="carousel1"
            className="h-full w-full object-cover"
          />
          <img
            src={crsl2}
            alt="carousel"
            className="h-full w-full object-cover"
          />
          <img
            src={crsl3}
            alt="carousel"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
      <section className=" bg-white text-lg px-2 pb-3 w-full">
        <p className="font-bold text-2xl">Trenidng Now</p>
      </section>

      <Outlet />
    </>
  );
};
