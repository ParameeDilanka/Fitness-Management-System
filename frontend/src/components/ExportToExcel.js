import React from 'react'
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { Link } from 'react-router-dom';

export const ExportToExcel = ({ apiData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  


  const exportToCSV = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
};
  return (
   
    <div>
     <Link to={"/staff"}>Appointment List</Link><br></br>
     <div className="photo">
   <img src="https://thumbs.dreamstime.com/b/portrait-positive-cheerful-chief-company-owner-girl-sit-desk-hold-her-spectacles-ready-welcome-startup-development-partners-176965507.jpg"
  />
  </div>

     <div>
     <center>
    <h3>Generate Report</h3><br></br>
    <button  className="button1" onClick={(e) => exportToCSV(apiData, fileName)}>Generate</button>
    </center>
</div>
</div>
);
}

