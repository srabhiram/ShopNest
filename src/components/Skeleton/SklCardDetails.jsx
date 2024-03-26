import Navbar from "../Navbar";
import Skeleton from "react-loading-skeleton";

const CartDetails = () => {
  return (
    <>
      <Navbar />

      <header className=" h-screen m-3 animate-pulse">
        <section className="grid  md:grid-cols-2 sm:grid-cols-1  bg-white">
          <div>
            <div key="" className="bg-white border-b rounded ">
              <div className="w-full grid grid-cols-4 justify-center   items-center  p-5  h-full ">
                <div className="flex items-center s justify-center bg-gray-200 w-[120px] h-[120px]">
                  {" "}
                  <img src="" alt="" width={60} className=" p-4" />
                </div>
                <div className="col-span-2 text-start space-y-1 ml-8">
                  <div className=" bg-gray-200">
                    <p className=" font-medium text-sm w-full">
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                  </div>
                  <div className=" bg-gray-200">
                    <p className=" font-medium text-sm w-full">
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                  </div>
                  <div className=" bg-gray-200">
                    <p className=" font-medium text-sm w-full">
                      &nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                  </div>

                  <p className=" font-medium text-md ">
                    <span className="text-xs opacity-90">{}</span>
                  </p>
                </div>
                <div className=" ml-8 flex justify- gap-2 items-center  ">
                  <button className="bg-gray-200 border rounded-xl h-[20px] px-3 py-2 font-semibold text-md hover:bg-black hover:text- hover:transition-all hover:ease-in-out hover:duration-100   text-black"></button>
                  <p className="font-semibold">{}</p>
                  <button className="bg-gray-200  border rounded-xl h-[20px] px-3 py-2 font-semibold text-md hover:bg-black hover:text-gray-200 hover:transition-all hover:ease-in-out hover:duration-100   text-black"></button>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="md:w-2/6 max-sm:m-4 sm:px-2  bg-gray-50 p-4 shadow-md flex flex-col gap-3 md:fixed md:right-24 ">
            <div className="bg-gray-200 w-1/2 "> </div>
            <div className="border-b py-1 text-gray-500 flex justify-between items-center">
              <div className="bg-gray-200 w-1/2">
                {" "}
                <p className="text-xl">&nbsp;</p>
              </div>
            </div>
            <div className="border-b py-1 text-gray-500 flex justify-between items-center">
              <div className="bg-gray-200 w-1/2">
                {" "}
                <p className="text-xl">&nbsp;</p>
              </div>
            </div>
            <div className="border-b py-1 text-gray-500 flex justify-between items-center">
              <div className="bg-gray-200 w-1/2">
                {" "}
                <p className="text-xl">&nbsp;</p>
              </div>
            </div>
            <div className="border-b py-1 font-medium flex justify-between text-xl mb-3">
              {" "}
              <div className="bg-gray-200 w-1/2">
                {" "}
                <p className="text-xl">&nbsp;</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-black/30 px-3 py-2 w-2/4 text-center  text-white rounded-md text-xl tracking-wider font-medium">
                {" "}
                &nbsp;
              </button>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default CartDetails;
