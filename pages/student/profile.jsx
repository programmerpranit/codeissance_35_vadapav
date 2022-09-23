import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <>
      <div>
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
        <div className="flex ">
          <div>
            <img
              src={"https://dummyimage.com/600x400"}
              alt="Profile Image"
              className="flex "
            />
          </div>
          <div className="flex flex-col m-4 p-6 border-black">
            <h1 className="p-4 text-3xl">Student name</h1>
            <h1 className="p-4 text-lg">Branch</h1>
            <h1 className="p-4 text-lg">Year </h1>
            <h1 className="p-4 text-lg">Prn no </h1>
          </div>
        </div>
        <div>
          gfgfd
        </div>
      </div>
    </> 
  );
};

export default Profile;
