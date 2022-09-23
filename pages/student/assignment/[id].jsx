import Link from "next/link";
import React from "react";

const Assignment = () => {
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
              <li className="p-4 ">Report</li>
            </Link>
            <Link href={"/"}>
              <li className="p-4 ">Logout</li>
            </Link>
          </ul>
        </div>
      </div>
      <div>
        <div className=" flex  justify-center ">
          <h1 className="text-center text-2xl w-80 border rounded-sm border-black m-2.5 p-2.5">
            Assignment No:
          </h1>
        </div>
        <div className="border-black border my-2" />
        <div className="flex justify-center">
          <div className="flex-col border-2 w-3/6  border-black m-2.5 p-2.5">
            <label
              for="default-input"
              class="block text-lg m-2  text-black  p-1  font-medium "
            >
              Attach .pdf file below.
            </label>

            <label
              class="block m-2 p-1 text-sm font-medium text-black"
              for="file_input"
            >
              Upload file
            </label>
            <input
              class="block  text-sm p-2 m-2 rounded-lg border-black text-black border w-3/6  cursor-pointer  focus:outline-none "
              type="text"
              placeholder="Insert link of document"
            />
            {/* <input
              class="block  text-sm p-2 m-3 rounded-lg border-black border w-3/6  cursor-pointer  focus:outline-none "
              id="file_input"
              type="file"
            /> */}

            <button className="border border-black rounded-sm p-2 m-3">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assignment;
