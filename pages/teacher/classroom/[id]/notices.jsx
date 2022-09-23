import Link from "next/link";
import React from "react";

const Notices = () => {
  return (
    <>
      <div>
      
        <div className="flex place-items-center bg-black max-w margin-auto   text-white ">
        <button onclick="buttonHandler()" title="Notices"
        class="fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl ">&#10133;</button>
          <h1 className="text-3xl w-full text-white font-bold mx-1 p-4">
            Nikaaal
          </h1>
          <ul className="flex m-4">
            <Link href={"#"}>
              <li className="p-4 cursor-pointer ">Assignments</li>
            </Link>
            <Link href={"#"}>
              <li className="p-4 cursor-pointer">Students</li>
            </Link>
            <Link href={"#"}>
              <li className="p-4 text-yellow-900 cursor-pointer">Notices</li>
            </Link>
            <Link href={"#"}>
              <li className="p-4 hover:text-yellow-900 cursor-pointer">Logout</li>
            </Link>
          </ul>
        </div>
        <div>
        


        </div>
      </div>
    </>
  );
};

export default Notices;
