import Link from "next/link";
import React, { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    emailAddress: "",
    branch: "",
    year: "",
    prnno: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
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
                  setUser({ ...user, [e.target.name]: [e.target.value] });
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
                  setUser({ ...user, [e.target.name]: [e.target.value] });
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
                  setUser({ ...user, [e.target.name]: [e.target.value] });
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
                  setUser({ ...user, [e.target.name]: [e.target.value] });
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
                  setUser({ ...user, [e.target.name]: [e.target.value] });
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
                  setUser({ ...user, [e.target.name]: [e.target.value] });
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

/*
            <div>
              <h3 className=" text-lg p-2 mb-1 mr-5">I am a ?</h3>
              <input
                type="radio"
                name="role"
                value={1}
                className="m-5 text-lg text-black"
              />
              <label>Teacher</label>
              <input
                type="radio"
                name="role"
                value={0}
                className="m-5 text-lg text-black"
              />
              <label>Student</label>
            </div>
*/
