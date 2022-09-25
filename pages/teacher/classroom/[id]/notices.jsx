import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Notice from "../../../../components/Notice";
import baseUrl from "../../../../util/baseUrl";
const Notices = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id)
  useEffect(() => {
    fetchNotices();
  }, []);

  const [title, setTitle] = useState("")

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
      `${baseUrl}/api/notice`,
      settings
    );
    const response = await fetchResponse.json();
    console.log(response);
    if (fetchResponse.status == 200) {
      setNotices(response);
    }
  };

  const addNotices = async () => {
    const token = localStorage.getItem("token");
    if (token == null) {
      router.push("/account/login");
    }

    var data = {
      token: token,
      classroom: id,
      title: title,
      description: ""
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
      `${baseUrl}/api/notice`,
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
                  onChange={(e)=>{
                    setNotices(e.target.value)
                  }}  
                  className="bg-gray-50 w-3/6 border p-2.5 border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block    dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <button onClick={addNotices} className="border hover:bg-[#d1d5db] border-black rounded-sm p-2.5 m-2.5">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="border border-black" />
        {/* <div>
          <Notice
            title={notices.title}
            description={notices.description}
            classroom={notices.classroom}
            teacher={notices.classroom}
          />
        </div> */}
      </div>
    </>
  );
};

export default Notices;
