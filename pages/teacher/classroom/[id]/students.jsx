import Link from "next/link";
import React from "react";

const Students = () => {
  return (
    <>
      <div className="flex place-items-center bg-black max-w text-white margin-auto ">
        <h1 className="text-3xl w-full text-white font-bold mx-1 p-4">
          Nikaaal
        </h1>
        <ul className="flex m-4">
          <Link href={"#"}>
            <li className="p-4  cursor-pointer hover:text-yellow-900">Assignments</li>
          </Link>
          <Link href={"#"}>
            <li className="p-4 text-yellow-900  cursor-pointer ">Students</li>
          </Link>
          <Link href={"#"}>
            <li className="p-4 hover:text-yellow-900 cursor-pointer">Notices</li>
          </Link>
          <Link href={"#"}>
            <li className="p-4 hover:text-yellow-900 cursor-pointer ">
              Logout
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <div className="">
        <h1 className="text-5xl border-b-2 m-2.5 p-2.5  border-black text-center font-bold">Students</h1>
        </div>
        <div>
          <div>
            <h1 className="border-black border-2 text-lg m-4 p-2 rounded-md w-3/6 mx-auto" >Student name</h1>
          </div>
          <div>
            <h1 className="border-black border-2 text-lg m-4 p-2 rounded-md w-3/6 mx-auto">Student name</h1>
          </div>
          <div>
            <h1 className="border-black border-2  text-lg m-4 p-2 rounded-md w-3/6 mx-auto" >Student name</h1>
          </div>
          <div>
            <h1 className="border-black border-2  text-lg m-4 p-2 rounded-md w-3/6 mx-auto">Student name</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
