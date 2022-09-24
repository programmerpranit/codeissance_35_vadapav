import React from "react";

const Student = ({ name }) => {
  return (
    <>
      <div>
        <div className="border-2 border-black hover:bg-[#d1d5db] rounded-md m-2 p-3 ">
          <h1 className="text-2xl font-bold">{name}</h1>
        </div>
      </div>
    </>
  );
};

export default Student;
