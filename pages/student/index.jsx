import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Subjects from "../../components/Subjects";
import Assignments from "../../components/Assignment";
import baseUrl from "../../util/baseUrl";
import Notice from "../../components/Notice";

import { useRouter } from "next/router";

const StudentDashboard = () => {
  const router = useRouter();

  const [notices, setNotices] = useState([]);

  // import {IoIosAdd }from "react-icons/IoIosAdd"

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
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

  useEffect(() => {
    fetchNotices();
  }, []);

  return (
    <>
      <div>
        <div>
          {/* navigation bar */}

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
                    <Subjects />
                    <Subjects />
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
                    <Notice
                      teacherName={notice.uploadedby}
                      key={notice._id}
                      title={notice.title}
                    />
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
