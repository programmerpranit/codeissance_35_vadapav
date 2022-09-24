import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import baseUrl from "../../util/baseUrl";

const Signup = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    fullName: "",
    emailAddress: "",
    branch: "",
    year: "",
    prnno: "",
    password: "",
  });

  const handleSubmit = async () => {
    var data = {
      name: user.fullName,
      email: user.emailAddress,
      password: user.password,
      role: false,
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

    if (fetchResponse.status === 201) {
      localStorage.setItem("token", response);
      // setUser(response);
      toast.success(response.message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
      router.push("/student");
      
    } else {
      toast.error(response.message);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="flex justify-center">
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
              <h3 className=" text-lg p-2 mb-1">Branch</h3>
              <input
                className=" border-black border rounded-sm w-96 p-2 ml-2 mr-5"
                placeholder="Enter Branch"
                name="branch"
                type={"text"}
                onChange={(e) => {
                  setUser({ ...user, branch: e.target.value });
                }}
              />
            </div>
            <div>
              <h3 className=" text-lg p-2 mb-1">Year</h3>
              <input
                className=" border-black border rounded-sm w-96 p-2 ml-2 mr-5"
                placeholder="Enter Year(eg. FE/SE/TE/BE)"
                name="year"
                type={"text"}
                onChange={(e) => {
                  setUser({ ...user, year: e.target.value });
                }}
              />
            </div>
            <div>
              <h3 className=" text-lg p-2 mb-1">PRN Number</h3>
              <input
                className=" border-black border rounded-sm w-96 p-2 ml-2 mr-5"
                placeholder="PRN Number"
                name="prnno"
                onChange={(e) => {
                  setUser({ ...user, prnno: e.target.value });
                }}
              />
            </div>
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
              className=" mt-4 bg-transparent font-semibold  hover:bg-blue-300  py-2 px-4 border border-black rounded"
            >
              Create Account
            </button>
          </div>
          <Link href={"teachersignup"}>
            <h1 className="p-3 m-4 text-md">
              Not a student?{" "}
              <a className=" text-green-600 hover:text-blue-800" href={""}>
                Signup as a teacher
              </a>
            </h1>
          </Link>
        </div>

      </div>
    </>
  );
};

export default Signup;

