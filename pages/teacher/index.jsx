import Link from "next/link";
import React, { useEffect, useState } from "react";
import Classes from "../../components/Classes";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import baseUrl from "../../util/baseUrl";
import { useRouter } from "next/router";

const TeacherDashboard = () => {
  const router = useRouter();

  const [className, setClassName] = useState("");
  const [semester, setSemester] = useState(0);

  const [teacher, setTeacher] = useState(false);

  const [classRooms, setClassRooms] = useState([]);

  const handleCreate = async () => {
    const token = localStorage.getItem("token");
    if (token == null) {
      router.push("/account/login");
    }

    var data = {
      title: className,
      semester: semester,
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
    const fetchResponse = await fetch(`${baseUrl}/api/classroom`, settings);
    const response = await fetchResponse.json();

    if (fetchResponse.status === 201) {
      router.push(`/teacher/classroom/${response.id}`);
    } else {
      console.error(response.message);
    }
  };

  const getClassrooms = async () => {
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
      `${baseUrl}/api/classroom/teacherclassrooms`,
      settings
    );
    const response = await fetchResponse.json();

    if (fetchResponse.status === 200) {
      console.log(response);

      setClassRooms(response.classrooms);
      // router.push(`/teacher/classroom/${response.id}`);
    } else {
      console.error(response.message);
    }
  };

  const validate = async () => {
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
    const fetchResponse = await fetch(`${baseUrl}/api/auth/user`, settings);
    const response = await fetchResponse.json();

    if (fetchResponse.status == 200) {
      setTeacher(response.teacher);
      // console.log(response)
    }
  };

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    validate();
    getClassrooms();
  }, []);

  return (
    <>
      {teacher && (
        <div>
          <div className="flex justify-between items-center bg-black max-w mx-auto text-white ">
            <h1 className="text-3xl w-full text-white font-bold mx-1 p-4">
              Nikaaal!
            </h1>
            <ul className="flex m-4">
              <Link href={"/"}>
                <li className="p-4 hover:text-yellow-900 ">Home</li>
              </Link>
              <Link href={"/"}>
                <li className="p-4 hover:text-yellow-900 ">Profile</li>
              </Link>
              <Link href={"/"}>
                <li className="p-4 hover:text-yellow-900">Logout</li>
              </Link>
            </ul>
          </div>

          <div className="m-4 p-4 border-2 w-3/6  border-black rounded-md">
            <div>
              <h1 className="border-b-2 text-black  border-black">
                Create Classroom
              </h1>
              <div className="flex ">
                <div className="flex">
                  <label
                    htmlFor="default-input"
                    className="block text-lg m-2 text-black   font-medium "
                  >
                    Classroom Name:
                  </label>
                  <div className="m-2.5 ">
                    <input
                      type="text"
                      onChange={(e) => {
                        setClassName(e.target.value);
                      }}
                      id="default-input"
                      className="bg-gray-50 border w-full border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex">
                  <label
                    htmlFor="default-input"
                    className="block text-lg m-2 text-black   font-medium "
                  >
                    Semester:
                  </label>
                  <div className="m-2.5 ">
                    <input
                      type="number"
                      id="default-input"
                      onChange={(e) => {
                        setSemester(e.target.value);
                      }}
                      className="bg-gray-50 border w-full border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-center">
              <button
                onClick={handleCreate}
                className="mx-auto border-2 border-black rounded-md hover:bg-blue-300 bg-opacity-0 p-2 m-2"
              >
                Create
              </button>
            </div>
          </div>
          <div className=" border-black border-2" />
          <div><h1 className="text-3xl border-b-2 border-black m-2 p-2 w-64 font-bold">Current Classes:</h1></div>
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
                      <Link
                        key={c._id}
                        passHref={true}
                        href={`/teacher/classroom/${c._id}`}
                        className="cursor-pointer"
                      >
                        <div>
                          <Classes title={c.title} sem={c.semester} />
                        </div>
                      </Link>
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
      )}
    </>
  );
};

export default TeacherDashboard;
