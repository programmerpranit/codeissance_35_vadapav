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
      </div>
    </>
  );
};

export default Profile;
