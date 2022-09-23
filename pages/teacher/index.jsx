import Link from "next/link";
import React from "react";

const index = () => {

  subjects = [{
    
    "teacherName" : "Suryavanshi",
    "Subject": "TCS"
  },
  {
    "teacherName" : "Suryavanshi",
    "Subject": "TCS"
  },
  {
    "teacherName" : "Suryavanshi",
    "Subject": "TCS"
  }

]
  
  return (
    <>
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

      <div className="m-4">
        <a
          href="#"
          class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Subject Name
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Year Sem Division
          </p>
        </a>
      </div>
    </>
  );
};

export default index;
