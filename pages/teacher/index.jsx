import React from "react";

const index = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-black max-w mx-auto text-white ">
        <h1 className="text-3xl w-full text-white font-bold mx-1 p-4">
          Nikaaal!
        </h1>
        <ul className="flex m-4">
          <li className="p-4 ">Home</li>
          <li className="p-4 ">Profile</li>
          <li className="p-4 ">ScoreCard</li>
          <li className="p-4 ">Logout</li>
        </ul>
      </div>
    </>
  );
};

export default index;
