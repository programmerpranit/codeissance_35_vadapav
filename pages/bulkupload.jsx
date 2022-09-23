import React, { useState } from "react";
import Papa from "papaparse";

// Allowed extensions for input file
const allowedExtensions = ["csv"];

const BulkUpload = () => {

    // This state will store the parsed data
    const [data, setData] = useState([]);

    // It state will contain the error when
    // correct file extension is not used
    const [error, setError] = useState("");

    // It will store the file uploaded by the user
    const [file, setFile] = useState("");

    // This function will be called when
    // the file input changes
    const handleFileChange = (e) => {
        setError("");

        // Check if user has entered the file
        if (e.target.files.length) {
            const inputFile = e.target.files[0];

            // Check the file extensions, if it not
            // included in the allowed extensions
            // we show the error
            const fileExtension = inputFile?.type.split("/")[1];
            if (!allowedExtensions.includes(fileExtension)) {
                setError("Please input a csv file");
                return;
            }

            // If input type is correct set the state
            setFile(inputFile);
        }
    };
    const handleParse = () => {

        // If user clicks the parse button without
        // a file we show a error
        if (!file) return setError("Enter a valid file");

        // Initialize a reader which allows user
        // to read any file or blob.
        const reader = new FileReader();

        // Event listener on reader when the file
        // loads, we parse it and set the data.
        reader.onload = async ({ target }) => {
            const csv = Papa.parse(target.result, { header: true });
            const parsedData = csv?.data;
            const columns = Object.keys(parsedData[0]);
            console.log(parsedData)
            setData(columns);
        };
        reader.readAsText(file);
    };

    return (
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
                />
                <label for="radio-btn">IA-1</label>

                <input
                    type="radio"
                    name="radiobtn"
                    value="ia2"
                />
                <label for="radio-btn">IA-2</label>

                <input
                    type="radio"
                    name="radiobtn"
                    value="sem"
                />
                <label for="radio-btn">Semester</label>


            </div>


            <div className="items-center text-2xl bg-gray-300 p-2 rounded-lg font-medium mx-10 my-5 border-black border-2 hover:bg-gray-400">
                <button className="{
                 outline: 1px dotted;
                 outline: 5px auto -webkit-focus-ring-color;
                 }" onClick={handleParse}>Submit</button>
            </div>
        </div>
    );
};

export default BulkUpload;