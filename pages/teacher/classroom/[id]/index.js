import Link from "next/link";
import React from "react";

const Classroom = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex place-items-center bg-black max-w margin-auto   text-white ">
          <h1 className="text-3xl w-full text-white font-bold mx-1 p-4">
            Nikaaal
          </h1>
          <ul className="flex m-4">
            <Link href={"#"}>
              <li className="p-4 text-yellow-900">Assignments</li>
            </Link>
            <Link href={"#"}>
              <li className="p-4 ">Students</li>
            </Link>
            <Link href={"#"}>
              <li className="p-4 ">Notices</li>
            </Link>
            <Link href={"#"}>
              <li className="p-4 hover:text-yellow-900">Logout</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="max-w bg-slate-400 h-full">
      <div>
        
      </div>
      

      </div>
    </>
  );
};

export default Classroom;
