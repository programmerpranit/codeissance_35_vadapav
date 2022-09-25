import Link from "next/link";
import { useRouter } from 'next/router'
import React, { useEffect, useState } from "react";
import baseUrl from "../../../../util/baseUrl";




const Classroom = () => {

  const router = useRouter()
  const { id } = router.query

  const [teacher, setTeacher] = useState(false)

  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [date, setDate] = useState()

  const [assignments, setAssignments] = useState([])
  
  useEffect(() => {
    validate();
 
    getAssignments();

  }, [])


  const getAssignments = async () => {
    const token = localStorage.getItem("token");
    if (token == null) {
      router.push("/account/login");
    }

    var data = {
      cid: id,
      token: token
    };

    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const fetchResponse = await fetch(`${baseUrl}/api/assignment/all`, settings);
    const response = await fetchResponse.json();

    if (fetchResponse.status == 200) {

      console.log(response)

      setAssignments(response)

      // router.push(`/teacher/classroom/${response.id}`);
      
    } else {
      console.error(response.message)
    }
  }


  const addAssignment = async () => {
    
    const token = localStorage.getItem("token");
    if (token == null) {
      router.push("/account/login");
    }

    var data = {
      title: name,
      description: desc,
      dueDate: date,
      classroom: id,
      token: token
    };

    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const fetchResponse = await fetch(`${baseUrl}/api/assignment`, settings);
    const response = await fetchResponse.json();

    if (fetchResponse.status === 201) {

      console.log(response)

      // router.push(`/teacher/classroom/${response.id}`);
      
    } else {
      console.error(response.message)
    }
  }

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
  }


  return (
    <>

    {teacher && 

<div>


      <div className="flex flex-col">
        <div className="flex place-items-center bg-black max-w margin-auto   text-white ">
          <h1 className="text-3xl w-full text-white font-bold mx-1 p-4">
            Nikaaal 
          </h1>
          <ul className="flex m-4">
            <Link href={`/teacher/classroom/${id}`}>
              <li className="p-4 text-yellow-900">Assignments</li>
            </Link>
            <Link href={`/teacher/classroom/${id}/students`}>
              <li className="p-4 ">Students</li>
            </Link>
            <Link href={`/teacher/classroom/${id}/notices`}>
              <li className="p-4 ">Notices</li>
            </Link>
            <Link href={"#"}>
              <li className="p-4 hover:text-yellow-900">Logout</li>
            </Link>
          </ul>
        </div>
      </div>
      <div>
        <div className="border border-black text-lg flex justify-between">
          <h1 className="  text-lg">Class Code : {id} </h1>
          <Link className="hover:text-yellow-800 m-2" href={`/bulkupload`}>Bulk Upload Marks</Link>
        </div>
      </div>

      {/* Class Id = {id} */}

      <div className="flex flex-col m-4 p-4 mx-auto border-black border-2 rounded-md w-3/6">
        <h1 className="text-2xl">Add assignment</h1>
        <input
          className=" border-black border rounded-sm p-2 mt-4 w-full "
          placeholder="Assignment Name"
          name="name"
          onChange={(e)=>{
            setName(e.target.value)
          }}
        />
        <input
          className=" border-black border rounded-sm p-2 mt-4 w-full h-20"
          placeholder="Assignment description"
          name="desc"
          onChange={(e)=>{
            setDesc(e.target.value)
          }}
          />
        <input
          className="border-black border mt-4 p-2"
          type="date"
          placeholder="Set Due Date"
          name="dueDate"
          onChange={(e)=>{
            console.log(e.target.value)
            setDate(e.target.value)
          }}
        />
        <button onClick={addAssignment} className="border-black hover:bg-[#d1d5db] border-2 m-4 rounded-md w-2/5 p-2 mx-auto">
          Add assignment
        </button>
        
      </div>


          { assignments && assignments.map((a)=>(
            <div key={a._id} className="border-black border-2 mx-auto bg-[#d1d5db] rounded-md m-4 mt-6 p-2 w-4/6">
            <h1 className="text-xl font-bold p-2" >{a.title}</h1>
            <h1 className="p-2">{a.dueDate}</h1>
            <p className="p-2">
              {a.description}
            </p>
          </div>
          ))

          }

</div>
  }
    </>
  );
};

export default Classroom;
