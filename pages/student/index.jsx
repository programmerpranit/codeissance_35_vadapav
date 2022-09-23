import React from "react";
import Link from "next/link";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import subjects from "../../components/Subjects";
import Subjects from "../../components/Subjects";
import Assignments from "../../components/Assignment";
import Notice from "../../components/Notice";
// import {IoIosAdd }from "react-icons/IoIosAdd"

const index = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div>
        <div>
          {/* navigation bar */}
          <div className="flex justify-between items-center bg-black max-w mx-auto text-white ">
            <h1 className="text-3xl w-full text-white font-bold mx-1 p-4">
              Nikaaal!
            </h1>
            <ul className="flex m-4">
              <Link href={"/"}>
                <li className="p-4 ">Home</li>
              </Link>
              <Link href={"/"}>
                <li className="p-4 ">Profile</li>
              </Link>
              <Link href={"/"}>
                <li className="p-4 ">Logout</li>
              </Link>
            </ul>
          </div>

          {/* classes */}
          <div className=" bg-[#ddd6fe] ">
            <div className="relative flex  w-full items-center group">
              <MdChevronLeft
                onClick={slideLeft}
                size={40}
                className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden  group-hover:block"
              />
              <div
                id="slider"
                className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
              >
                <div>
                  <div className="m-2 p-3 flex">
                    <Subjects />
                    <Subjects />
                  </div>
                </div>
              </div>
              <MdChevronRight
                onClick={slideRight}
                size={40}
                className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
              />
            </div>
          </div>
          <div className="flex ">
            <div className="m-4 ">
              <div>
                <h1 className="text-2xl font-bold ml-5 border-b border-black">
                  Notices:
                </h1>
                <Notice />
                <Notice />
                <Notice />
                <Notice />
                <Notice />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
