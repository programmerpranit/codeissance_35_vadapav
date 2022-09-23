import Link from "next/link";
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Notice from "../../../../components/Notice";

const Notices = () => {
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
        <div className="flex place-items-center bg-black max-w margin-auto   text-white ">
          {/* <button
            onclick="buttonHandler()"
            title="Notices"
            class="fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl "
          >
            &#10133;
          </button> */}
          <h1 className="text-3xl w-full text-white font-bold mx-1 p-4">
            Nikaaal
          </h1>
          <ul className="flex m-4">
            <Link href={"#"}>
              <li className="p-4 hover:text-yellow-900 cursor-pointer ">
                Assignments
              </li>
            </Link>
            <Link href={"#"}>
              <li className="p-4 hover:text-yellow-900 cursor-pointer">
                Students
              </li>
            </Link>
            <Link href={"#"}>
              <li className="p-4 text-yellow-900 cursor-pointer">Notices</li>
            </Link>
            <Link href={"#"}>
              <li className="p-4 hover:text-yellow-900 cursor-pointer">
                Logout
              </li>
            </Link>
          </ul>
        </div>
        <div className=" border-2 border-black m-2.5 p-2.5 rounded-md ">
          <div className=" rounded-md  rounded-black ">
            <div className="flex-col">
              <label
                for="default-input"
                class="block text-lg m-2  text-black r p-2  font-medium "
              >
                Add Notice:
              </label>
              <div className="m-2.5 ">
                <input
                  type="text"
                  id="default-input"
                  className="bg-gray-50 w-3/6 border p-2.5 border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block    dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <button className="border border-black rounded-sm p-2.5 m-2.5">Send</button>
            </div>
          </div>
        </div>
        <div className="border border-black" />
        <div>
          <Notice />
          <Notice />
          <Notice />
          <Notice />
        </div>
      </div>
    </>
  );
};

export default Notices;
