import Link from "next/link";
import React, { useEffect, useState } from "react";
import Student from "../../../../components/Student";
import baseUrl from "../../../../util/baseUrl";
const Students = () => {

  const [students, setStudents] = useState([])

  useEffect(() => {
    fetchStudents();
  }, []);
  
  const fetchStudents = async () => {
    const token = localStorage.getItem("token");
    if (token == null) {
      router.push("/account/login");
    }

    var data = {
      token: token,
    };

    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const fetchResponse = await fetch(
      `${baseUrl}/api/classroom/student`,
      settings
    );
    const response = await fetchResponse.json();
    console.log(response);
    if (fetchResponse.status == 200) {
      setStudents(response);
    }
  };

  return (
    <>
      <div className="flex place-items-center bg-black max-w text-white margin-auto ">
        <h1 className="text-3xl w-full text-white font-bold mx-1 p-4">
          Nikaaal
        </h1>
        <ul className="flex m-4">
          <Link href={"#"}>
            <li className="p-4  cursor-pointer hover:text-yellow-900">
              Assignments
            </li>
          </Link>
          <Link href={"#"}>
            <li className="p-4 text-yellow-900  cursor-pointer ">Students</li>
          </Link>
          <Link href={"#"}>
            <li className="p-4 hover:text-yellow-900 cursor-pointer">
              Notices
            </li>
          </Link>
          <Link href={"#"}>
            <li className="p-4 hover:text-yellow-900 cursor-pointer ">
              Logout
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <div className="">
          <h1 className="text-5xl border-b-2 m-2.5 p-2.5  border-black text-center font-bold">
            Students
          </h1>
        </div>
        <div className="flex justify-center">
          <div>
            <Student  name={'PRathamesh Karambelkar'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
