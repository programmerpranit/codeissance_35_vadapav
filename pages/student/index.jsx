import React from "react";
import Link from "next/link";
const index = () => {
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
            
          </div>
          <div className="flex ">
            <div className="m-4 ">
              <h1 className="text-3xl">Notice</h1>
            </div>
            <div className="m-4 ">
              <h1 className="text-3xl">Assignments</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
