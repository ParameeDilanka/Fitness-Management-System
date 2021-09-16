import React from 'react'
import axios from 'axios'

import {ExportToExcel} from './ExportToExcel'

function Report() {
  const [data, setData] = React.useState([])
  const fileName = "appointment";

  React.useEffect(() => {
    const fetchData = () =>{
     axios.get('http://localhost:5000/appointments/').then(r => setData(r.data) )
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <ExportToExcel apiData={data} fileName={fileName}/>
    </div>
  );
}

export default Report;