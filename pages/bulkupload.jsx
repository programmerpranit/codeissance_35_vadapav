import React, { useState } from "react";

const BulkUpload = () => {

    const [file, setFile] = useState("");

    const [array, setArray] = useState([])


    

    const handleUpload = (delimiter = ",") => {

        console.log(file)

        let reader = new FileReader();

        reader.onload = function (e) {
            
            let str = reader.readAsText(file);
            
            let headers = str.slice(0, str.indexOf("\n")).split(delimiter);
            
            // slice from \n index + 1 to the end of the text
            // use split to create an array of each csv value row
            let rows = str.slice(str.indexOf("\n") + 1).split("\n");
            
            let arr = rows.map(function (row) {
            const values = row.split(delimiter);
            const el = headers.reduce(function (object, header, index) {
              object[header] = values[index];
              return object;
            }, {});
            return el;
        });
        
        console.log(arr)
        
    };
        //   setArray(arr)

    }


  return (
    <>
      <input
              type="file"
              name="csvfile"
              accept=".csv"
              className="mt-2"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <button onClick={handleUpload}>Upload</button>
    </>
  );
};

export default BulkUpload;
