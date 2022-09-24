import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from 'next/router'
import baseUrl from "../../../util/baseUrl";

const Assignment = () => {

  const router = useRouter()
  const { id } = router.query;
  const [url, setUrl] = useState("")

  const submitAssignment = async () => {
    const token = localStorage.getItem("token");
    if (token == null) {
      router.push("/account/login");
    }


    var data = {
      fileUrl: url,
      token: token
    };

    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const fetchResponse = await fetch(`${baseUrl}/api/assignment/${id}`, settings);
    const response = await fetchResponse.json();

    if (fetchResponse.status == 201) {

      console.log(response)


      // router.push(`/teacher/classroom/${response.id}`);
      
    } else {
      console.error(response.message)
    }
  }

  
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
            Assignment No: {id}
          </h1>
        </div>
        <div className="border-black border my-2" />
        <div className="flex justify-center">
          <div className="flex-col border-2 w-3/6  border-black m-2.5 p-2.5">
            <label
              htmlFor="default-input"
              className="block text-lg m-2  text-black  p-1  font-medium "
            >
              Attach .pdf file below.
            </label>

            <label
              className="block m-2 p-1 text-sm font-medium text-black"
              htmlFor="file_input"
            >
              Upload file
            </label>
            <input
              className="block  text-sm p-2 m-2 rounded-lg border-black text-black border w-3/6  cursor-pointer  focus:outline-none "
              type="text"
              placeholder="Insert link of document"
              onChange={(e)=>{
                setUrl(e.target.value)
              }}

            />
            {/* <input
              className="block  text-sm p-2 m-3 rounded-lg border-black border w-3/6  cursor-pointer  focus:outline-none "
              id="file_input"
              type="file"
            /> */}

            <button className="border hover:bg-[#d1d5db] border-black rounded-sm p-2 m-3" onClick={submitAssignment}>
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assignment;
