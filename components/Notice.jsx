import React from "react";

const Notice = ({ title,description,classroom,teacher }) => {
  return (
    <>
      <div className="border-black border-2 mx-auto bg-[#d1d5db] rounded-md m-4 mt-6 p-2  w-4/6">
        <h1 className="text-xl font-bold p-2">{title}</h1>
        <p className="p-2">
          {description}
        </p>
        <h1 className="p-2">{classroom}</h1>
        <h1>{teacher}</h1>
      </div>
    </>
  );
};

export default Notice;
