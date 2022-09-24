import Link from "next/link";
import React, { useEffect, useState } from "react";
import Student from "../../../../components/Student";
import baseUrl from "../../../../util/baseUrl";
import { useRouter } from "next/router";

const Students = () => {
  const router = useRouter();
  const { id } = router.query;

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const token = localStorage.getItem("token");
    if (token == null) {
      router.push("/account/login");
    }

    var data = {
      classroom: id,
    };

    // console.log(data)
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const fetchResponse = await fetch(
      `${baseUrl}/api/classroom/getstudents`,
      settings
    );
    const response = await fetchResponse.json();
    console.log(response);
    if (fetchResponse.status == 200) {
      setStudents(response.students);
      console.log(response);
    }
  };

  return (
    <>
      <div className="flex place-items-center bg-black max-w text-white margin-auto ">
        <h1 className="text-3xl w-full text-white font-bold mx-1 p-4">
          Nikaaal
        </h1>
        <ul className="flex m-4">
          <Link href={"/"}>
            <li className="p-4  cursor-pointer hover:text-yellow-900">
              Assignments
            </li>
          </Link>
          <Link href={"/"}>
            <li className="p-4 text-yellow-900  cursor-pointer ">Students</li>
          </Link>
          <Link href={"/"}>
            <li className="p-4 hover:text-yellow-900 cursor-pointer">
              Notices
            </li>
          </Link>
          <Link href={"/"}>
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
          <div className=" w-3/6 ">
            {students &&
              students.map((s) => (

                <div key={s._id}>

                <Link href={`/student/${s.studentId}`} >

                <div >
                  <Student name={s.studentName} />
                </div>
                </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
