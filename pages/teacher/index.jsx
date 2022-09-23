import Link from "next/link";
import React from "react";
import Classes from "../../components/Classes";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


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

      <div className="m-4 p-4 border-2 w-3/6  border-black rounded-md">
        <div>
          <h1 className="border-b-2 text-black  border-black">
            Create Classroom
          </h1>
          <div className="flex ">
            <div className="flex">
              <label
                for="default-input"
                class="block text-lg m-2 text-black   font-medium "
              >
                Classroom Name:
              </label>
              <div className="m-2.5 ">
                <input
                  type="text"
                  id="default-input"
                  className="bg-gray-50 border w-full border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex">
              <label
                for="default-input"
                class="block text-lg m-2 text-black   font-medium "
              >
                Semester:
              </label>
              <div className="m-2.5 ">
                <input
                  type="text"
                  id="default-input"
                  className="bg-gray-50 border w-full border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center">

        <button  className="mx-auto border-2 border-black rounded-md bg-opacity-0 p-2 m-2">Create</button>
        </div>
      </div>
      <div className=" border-black border-2" />
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
            <Classes/>
            <Classes/>
            <Classes/>
            <Classes/>
            <Classes/>

            </div>
          </div>
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
        />
      </div>
    </>
  );
};

export default index;
