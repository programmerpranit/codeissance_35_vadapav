import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="flex-col">
        <h1 className="text-5xl font-bold text-center  border-b-2 border-black p-4 m-2">
          Nikaaal!
        </h1>
        <p className="text-lg p-4 m-2 border-2 rounded-md border-black">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="flex">
          <Link href={"/account/signup"}>
            <button className="text-lg  p-4 rounded-md m-2 text-black border-2 border-black">
              Sign Up!
            </button>
          </Link>

          <Link href={"/account/login"}>
            <button className="text-lg p-4 m-2 rounded-md text-black border-2 border-black ">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
