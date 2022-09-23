import Link from "next/link";
import React from "react";
import { Bar } from "react-chartjs-2";

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
              className="flex m-4"
            />
          </div>
          <div className="flex rounded-md flex-col m-4 p-6 border-black border-2">
            <h1 className="p-3 m-1 text-3xl border-b-2 border-black">
              Student name
            </h1>
            <h1 className="p-3 m-1 text-lg border-black border-b">
              Email Address
            </h1>
            <h1 className="p-3 m-1 text-lg border-black border-b">Branch</h1>
            <h1 className="p-3 m-1 text-lg border-black border-b">Year </h1>
            <h1 className="p-3 m-1 text-lg border-black border-b">Prn no </h1>
          </div>
        </div>
        <hr className="border-black " />
        <div className="flex flex-col">
          <div className="border-2 rounded-md m-4 p-2">
            <h1 className="text-black text-2xl font-bold ">Subject Name</h1>
            <div className="flex m-2 p-1">
              <h1>TCS</h1>
              <div style={{ maxWidth: "650px" }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
