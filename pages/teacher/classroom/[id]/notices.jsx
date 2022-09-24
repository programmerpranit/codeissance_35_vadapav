import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Notice from "../../../../components/Notice";
import baseUrl from "../../../../util/baseUrl";
const Notices = () => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    fetchNotices();
  }, []);

  const [notices, setNotices] = useState([]);
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

  return (
    <>
      <div>
        <div className="flex place-items-center bg-black max-w margin-auto   text-white ">
          {/* <button
            onclick="buttonHandler()"
            title="Notices"
            class="fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl "
          >
            &#10133;
          </button> */}
          <h1 className="text-3xl w-full text-white font-bold mx-1 p-4">
            Nikaaal {id}
          </h1>
          <ul className="flex m-4">
            <Link href={"#"}>
              <li className="p-4 hover:text-yellow-900 cursor-pointer ">
                Assignments
              </li>
            </Link>
            <Link href={"#"}>
              <li className="p-4 hover:text-yellow-900 cursor-pointer">
                Students
              </li>
            </Link>
            <Link href={"#"}>
              <li className="p-4 text-yellow-900 cursor-pointer">Notices</li>
            </Link>
            <Link href={"#"}>
              <li className="p-4 hover:text-yellow-900 cursor-pointer">
                Logout
              </li>
            </Link>
          </ul>
        </div>
        <div className=" border-2 border-black m-2.5 p-2.5 rounded-md ">
          <div className=" rounded-md  rounded-black ">
            <div className="flex-col">
              <label
                htmlFor="default-input"
                className="block text-lg m-2  text-black r p-2  font-medium "
              >
                Add Notice:
              </label>
              <div className="m-2.5 ">
                <input
                  type="text"
                  id="default-input"
                  className="bg-gray-50 w-3/6 border p-2.5 border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block    dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <button className="border border-black rounded-sm p-2.5 m-2.5">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="border border-black" />
        <div>
          <Notice
            title={notices.title}
            description={notices.description}
            classroom={notices.classroom}
            teacher={notices.classroom}
          />
        </div>
      </div>
    </>
  );
};

export default Notices;
