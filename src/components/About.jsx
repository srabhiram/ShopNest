import { FaGithub, FaLinkedin, FaUser } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import resume from "../assets/Abhiram - Resume.pdf";
import { SklAbout } from "./Skeleton/SklAbout";
import { useState, useEffect } from "react";

export const About = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1800);
  }, [loader]);

  return loader ? (
    <SklAbout />
  ) : (
    <>
      <footer
        id="about"
        className="bg-black h-1/4 p-3 text-white sm:grid sm:grid-rows-2 md:grid md:grid-cols-2 place-items-start place-content-center"
      >
        <div className="flex flex-col">
          <p className="text-white text-lg font-medium hover:border-b-2  py-1 flex-none hover:border-white w-fit">
            Contact Us
          </p>
          <p className="flex gap-2">
            Email:{" "}
            <a
              href="mailto:sriramoji.abhiram@gmail.com"
              target="_blank"
              className="text-blue-500"
            >
              sriramoji.abhiram@gmail.com
            </a>
          </p>
          <p className="">
            Phone: <span className="text-blue-500">+91 8125194161</span>
          </p>
          <p>
            Address:&nbsp;
            <span className="text-gray-400">
              Hyderabad,500072,Telangana,India.
            </span>
          </p>
        </div>
        <div className="max-lg:w-1/2 mt-4 max-sm:w-full">
          <p className="font-medium text-xl">Follow me</p>
          <div className="grid grid-cols-4 gap-3">
            <div className="flex gap-3 justify-center items-center">
              <FaLinkedin className="fill-white" />
              <a
                href="http://www.linkedin.com/in/abhiramsr"
                target="_blank"
                className="text-white"
              >
                Linkedin
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <FaGithub className="fill-white" />
              <a
                href="https://github.com/srabhiram"
                target="_blank"
                className="text-white"
              >
                Github
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <FaUser className="fill-white" />
              <a
                href="https://abhiportfoliyo.netlify.app/"
                target="_blank"
                className="text-white"
              >
                Porfolio
              </a>
            </div>
            <a href={resume} download={resume} target="_blank">
              <button className=" flex items-center text-white gap-3">
                <IoIosDocument className="fill-white" />
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center mt-2 text-gray-500">
          <p>Copyright &copy; 2024. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};
