import Link from 'next/link'
import React from 'react'

const Students = () => {
  return (
    <>
      <div className="flex place-items-center bg-black max-w text-white margin-auto ">
          <h1 className="text-3xl w-full text-white font-bold mx-1 p-4">
            Nikaaal
          </h1>
          <ul className="flex m-4">
            <Link href={"#"}>
              <li className="p-4  cursor-pointer">Assignments</li>
            </Link>
            <Link href={"#"}>
              <li className="p-4 text-yellow-900 cursor-pointer ">Students</li>
            </Link>
            <Link href={"#"}>
              <li className="p-4 cursor-pointer">Notices</li>
            </Link>
            <Link href={"#"}>
              <li className="p-4 hover:text-yellow-900 cursor-pointer ">Logout</li>
            </Link>
          </ul>
        </div>
    </>
  )
}

export default Students