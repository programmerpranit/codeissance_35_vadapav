import React, { useState } from "react";
import Papa from "papaparse";
import baseUrl from "../util/baseUrl"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Allowed extensions for input file
const allowedExtensions = ["csv"];

const BulkUpload = () => {

    const [semester, setSemester] = useState(1);
    const [exam, setExam] = useState("ia1")

    const [data, setData] = useState([]);

    const [error, setError] = useState("");

    const [file, setFile] = useState("");

    const handleFileChange = (e) => {
        setError("");

        if (e.target.files.length) {
            const inputFile = e.target.files[0];

            const fileExtension = inputFile?.type.split("/")[1];
            if (!allowedExtensions.includes(fileExtension)) {
                setError("Please input a csv file");
                return;
            }

            setFile(inputFile);
        }
    };
    const handleParse = () => {

        if (!file) return setError("Enter a valid file");

        const reader = new FileReader();

        reader.onload = async ({ target }) => {
            const csv = Papa.parse(target.result, { header: true });
            const parsedData = await csv?.data;
            console.log(parsedData)
            setData(parsedData);
            uploadFile(parsedData)
             
        };
        reader.readAsText(file);
    };

    const uploadFile = async (d) => {
        
        const data = {
            d: d,
            semester: semester,
            exam: exam
        }

        console.log(data)

          const settings = {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          };
          const fetchResponse = await fetch(`${baseUrl}/api/bulkupload`, settings);
          const response = await fetchResponse.json();
      
          if (fetchResponse.status === 200) {
            
            toast.success("Marks updated successfully")
            
          } else {
            console.log(response)
            
          }
    }


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

        <div className="bg-transparent flex flex-col items-center align-center mt-48 border-black border-2 mx-auto w-2/6 my-20 rounded-lg">
            <label htmlFor="csvInput" className="items-center text-2xl font-medium mx-10 my-8" style={{ display: "block" }}>
                Enter CSV File
            </label>
            <input
                className="items-center font-2xl mx-10 my-10"
                onChange={handleFileChange}
                id="csvInput"
                name="file"
                type="file"
            />

            <div className="flex flex-row space-x-4 text-xl">

                <input
                    type="radio"
                    name="radiobtn"
                    value="ia1"

                    onSelect={(e)=>{
                        setExam(e.target.value)
                    }}
                />
                <label htmlFor="radio-btn">IA-1</label>
                <input
                    type="radio"
                    name="radiobtn"
                    value="ia2"
                    onSelect={(e)=>{
                        setExam(e.target.value)
                    }}
                />
                <label htmlFor="radio-btn">IA-2</label>

                <input
                    type="radio"
                    name="radiobtn"
                    value="sem"
                    onSelect={(e)=>{
                        setExam(e.target.value)
                    }}
                />
                <label htmlFor="radio-btn">Semester</label>
                

            </div>
            <br />
                <input type="number" placeholder="semester" onChange={(e)=>{
                    setSemester(e.target.value)
                }} />


            <div className="items-center text-2xl bg-gray-300 p-2 rounded-lg font-medium mx-10 my-5 border-black border-2 hover:bg-gray-400">
                <button className="{
                    hover:bg-[#d1d5db]
                 outline: 1px dotted;
                 outline: 5px auto -webkit-focus-ring-color;
                }" onClick={handleParse}>Submit</button>
            </div>
        </div>
                </>
    );
};

export default BulkUpload;