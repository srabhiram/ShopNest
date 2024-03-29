import Skeleton from "react-loading-skeleton";
import { SklHome } from "./SklHome";

export const SklLanding = () => {
  return (
    <>
      <div className="bg-gray-200 max-sm:h-56 h-[21rem]  cursor-default overflow-hidden  pb-3 mt-1 mb-4 border-b">
        <Skeleton className="max-sm:h-56 h-[36rem]w-full bg-white" />
      </div>
      <section className=" bg-white text-lg px-2 pb-3 w-full ">
        <p className="font-bold text-2xl">
          <Skeleton width={122} />
        </p>
      </section>

      <SklHome />
    </>
  );
};
