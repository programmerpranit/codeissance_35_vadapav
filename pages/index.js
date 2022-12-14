import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="flex-col content-center ">
        <h1 className="text-5xl font-bold text-center  border-b-2 border-black p-4 m-2">
          Nikaaal 📄
        </h1>
        <p className="text-6xl p-8 m-2 mt-40 w-5/6 mx-auto  border-2 rounded-md  border-black font-sans text-center font-bold bg-[#d1d5db]">
        The ultimate destination for managing student reports, assignments and more!

        </p>
        <div className="flex  justify-center mt-20">
          <Link href={"/account/signup"}>
            <button className="text-lg w-48 hover:bg-[#d1d5db] p-4 rounded-md m-2 text-black border-2 border-black">
              Sign Up!
            </button>
          </Link>

          <Link href={"/account/login"}>
            <button className="text-lg p-4 m-2 w-48 hover:bg-[#d1d5db] rounded-md text-black border-2 border-black ">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
