import React, { useState } from "react";
import baseUrl from "../../util/baseUrl";
import { useRouter } from "next/router";

const TeacherSignup = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    fullName: "",
    emailAddress: "",
    password: "",
  });

  const handleSubmit = async () => {
    var data = {
      name: user.fullName,
      email: user.emailAddress,
      password: user.password,
      role: true,
    };

    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const fetchResponse = await fetch(`${baseUrl}/api/auth/signup`, settings);
    const response = await fetchResponse.json();
    console.log(response)

    if (fetchResponse.status === 201) {
      localStorage.setItem("token", response);
      // setUser(response);

      router.push("/teacher");
    } else {
      console.log(response)
    }
  };

  return (
   <>
     <div className="flex justify-center m-10">
        <div className=" bg-transparent border-black border-2 m-6 rounded-lg flex-col w-min ">
          <h1 className="text-3xl m-5 text-slate-900 rounded-md p-2">
            Sign-Up
          </h1>
          <div className="flex-col ml-5 mb-5 ">
            <div>
              <h3 className="text-lg p-2 mb-1">Full Name</h3>
              <input
                className=" border-black border  rounded-sm w-96 p-2 ml-2"
                placeholder="Enter Full Name"
                name="fullName"
                onChange={(e) => {
                  setUser({ ...user, fullName: e.target.value });
                }}
              />
            </div>
            <div>
              <h3 className=" text-lg p-2 mb-1">Email</h3>
              <input
                className=" border-black border rounded-sm w-96 p-2 ml-2 mr-5"
                placeholder="Enter Email"
                name="emailAddress"
                type={"email"}
                onChange={(e) => {
                  setUser({ ...user, emailAddress: e.target.value });
                }}
              />
            </div>
           
            <div>
            <div>
              <h3 className=" text-lg p-2 mb-1 mr-5">Password</h3>
              <input
                className=" border-black border rounded-sm w-96 p-2 ml-2"
                placeholder="Enter Password"
                name="password"
                type={"password"}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="justify-center flex  mb-5">
            <button
              onClick={handleSubmit}
              className=" mt-4 bg-transparent font-semibold  py-2 px-4 border border-black rounded"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
      </div>
  </>
  );
};

export default TeacherSignup
