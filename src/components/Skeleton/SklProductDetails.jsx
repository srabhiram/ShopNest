import Skeleton from "react-loading-skeleton";
import { SklSimilarCart } from "./SklSimilarCart";
export const SklProductDetails = () => {
  return (
    <>
      <main className=" bg-gray-100 flex flex-col md:pt-3 max-sm:pt-1 items-center justify-center  ">
        <main className=" px-4 pt-2 bg-white md:w-5/6 ">
          <div className="grid md:grid-cols-2 items-center gap-0 w-4/5 ">
            <div className="mx-lg:flex items-center m-5  justify-center p-4 rounded-md  ">
              <h1 className="text-center">
                <Skeleton width={350} height={350} />
              </h1>
            </div>
            <div className=" text-slate-700 px-3">
              <h1 className="font-sans text-2xl font-medium">
                <Skeleton />
              </h1>
              <p className=" font-medium text-3xl">
                <Skeleton />
              </p>
              <div className="mt-6 text-lg   lg:flex lg:items-center max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center  sm:w-full gap-4">
                <p className=" font-medium text-3xl">
                  <Skeleton width={80} height={30} />
                </p>
                <p className=" font-medium text-3xl">
                  <Skeleton width={80} height={30} />
                </p>
              </div>
              <div className=" text-slate-600">
                <p className="font font-medium text-lg mt-4">
                  <Skeleton />
                </p>
                <article>
                  <Skeleton count={4} />
                </article>
              </div>
            </div>
          </div>
        </main>

        <SklSimilarCart />
      </main>
    </>
  );
};
