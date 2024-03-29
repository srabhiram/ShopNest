import Skeleton from "react-loading-skeleton";

export const SklAbout = () => {
  return (
    <>
      <footer className="bg-black h-1/4 p-3 ">
        <p className="text-white text-xl font-medium hover:border-b-2 mb-2 py-1  hover:border-white w-fit">
          <Skeleton width={71} />
        </p>
        <div className="flex flex-col">
          <Skeleton count={3} width={312} />
        </div>
        <div className="max-lg:w-1/2 mt-4 max-sm:w-full">
          <p className="grid-cols-none">Follow me on</p>
          <div className="grid grid-cols-4 ">
            <div className="flex gap-3 items-center">
              <a
                href="http://www.linkedin.com/in/abhiramsr"
                target="_blank"
                className="text-white"
              >
                <Skeleton width={71} />
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <a
                href="https://github.com/srabhiram"
                target="_blank"
                className="text-white"
              >
                <Skeleton width={71} />
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <a
                href="https://abhiportfoliyo.netlify.app/"
                target="_blank"
                className="text-white"
              >
                <Skeleton width={71} />
              </a>
            </div>
            <a href="" download="" target="_blank">
              <button className=" flex items-center text-white gap-3"></button>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center mt-2 text-gray-500">
          <Skeleton width={412} />
        </div>
      </footer>
    </>
  );
};
