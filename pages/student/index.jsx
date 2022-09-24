import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Subjects from "../../components/Subjects";
import Assignment from "../../components/Assignment";
import baseUrl from "../../util/baseUrl";
import Notice from "../../components/Notice";

import { useRouter } from "next/router";

const StudentDashboard = () => {
  const router = useRouter();

  const [notices, setNotices] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [classRooms, setClassRooms] = useState([]);
  const [classId, setClassId] = useState("");

  // import {IoIosAdd }from "react-icons/IoIosAdd"

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const fetchClassrooms = async () => {
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
      setClassRooms(response);
    }
  };

  const fetchAssignments = async () => {
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
      `${baseUrl}/api/assignment/student`,
      settings
    );
    const response = await fetchResponse.json();
    console.log(response);
    if (fetchResponse.status == 200) {
      setAssignments(response);
    }
  };

  const fetchNotices = async () => {
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
      `${baseUrl}/api/notice/student`,
      settings
    );
    const response = await fetchResponse.json();
    console.log(response);
    if (fetchResponse.status == 200) {
      setNotices(response);
    }
  };

  const enroll = async () => {
    const token = localStorage.getItem("token");
    if (token == null) {
      router.push("/account/login");
    }

    var data = {
      token: token,
      id: classId,
    };

    const settings = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const fetchResponse = await fetch(
      `${baseUrl}/api/classroom/enroll`,
      settings
    );
    const response = await fetchResponse.json();
    console.log(response);
    if (fetchResponse.status == 201) {
      console.log("Enrolled Successfully");
    }
  };

  useEffect(() => {
    fetchNotices();
    fetchAssignments();
    fetchClassrooms();
  }, []);

  return (
    <>
      <div>
        <div>
          {/* navigation bar */}
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

          <div className="m-2 p-2 flex justify-end">
            <div >
            <input
              className="m-2 p-2 border border-black text-md text-black h-10 rounded-sm"
              type="text"
              placeholder="Enter class Code"
              onChange={(e) => {
                setClassId(e.target.value);
              }}
            />
            </div>
            <button className="p-2 m-2 hover:bg-slate-700 border-black border rounded-md" onClick={enroll}>
              Enroll
            </button>
          </div>

          {/* classes */}
          <div className=" bg-[#ddd6fe] ">
            <div className="relative flex  w-full items-center group">
              <MdChevronLeft
                onClick={slideLeft}
                size={40}
                className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden  group-hover:block"
              />
              <div
                id="slider"
                className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
              >
                <div>
                  <div className="m-2 p-3 flex">
                    {classRooms &&
                      classRooms.map((c) => (
                        <div key={c._id}>
                          <Subjects sub={c.title} teacher={c.teacherName} />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <MdChevronRight
                onClick={slideRight}
                size={40}
                className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
              />
            </div>
          </div>
          <div className="flex ">
            <div className="m-4 ">
              <div>
                <h1 className="text-2xl font-bold ml-5 border-b border-black">
                  Notices:
                </h1>

                {notices &&
                  notices.map((notice) => (
                    <div key={notice._id}>
                      <Notice
                        title={notice.title}
                        description={notice.description}
                        classroom={notice.classroom}
                        teacher={teacher.classroom}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="m-4 ">
              <div>
                <h1 className="text-2xl font-bold ml-5 border-b border-black">
                  Assignments:
                </h1>

                {notices &&
                  assignments.map((assignment) => (
                    <div key={assignment._id}>
                      <Assignment
                        title={assignment.title}
                        dueDate={assignment.dueDate}
                        description={assignment.description}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
