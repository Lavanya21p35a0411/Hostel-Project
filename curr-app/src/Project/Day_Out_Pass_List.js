import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from 'react';
import { Button,Modal,Input } from 'react-bootstrap';
import axios from "axios";
import JsPDF from 'jspdf';
function Day_Out_Pass_List(){
    const [houses,sethouses]=useState([])
    useEffect(()=>{
      axios.get('http://localhost:5001/getData1')
      .then((res)=>sethouses(res.data))
    })
    const generatePDF = () => {
    const report = new JsPDF('portrait','pt','a4');
    report.html(document.querySelector('#report')).then(() => {
        report.save('report.pdf');
    });
  }
  return (
        <div className='col-md-9' style={{"float":"right",border:"solid black 1px"}}><br/>
       <div className="container-fluid ">
        <h3 className="" style={{color:"black",marginBottom:"-10px",marginRight:"0.1%"}}><center>Day Out Pass List</center></h3>
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div className="row " style={{marginTop:"-20px",marginBottom:"-10px"}}>
           <div className="col-sm-3 mt-5 mb-4 text-gred" st>
               
               <button onClick={generatePDF} type="button">Export PDF</button>
            </div>  
              <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Student Details</b></h2></div>
            <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary"  style={{float:"right"}}>Add New Student</Button>
            </div>
           </div>  
            <div className="row">
                <div className="table-responsive " >
                 <table className="table table-striped table-hover table-bordered" id="report">
                    <thead>
                        <tr>
                            <th>StudentRollno:</th>
                            <th>StudentId:</th>
                            <th>StudentName:</th>
                            <th>Year:</th>
                            <th>Branch:</th>
                            <th>RoomNo:</th>
                            <th>OutDate:</th>
                            <th>OutTime:</th>
                            <th>Destination:</th>
                            <th>TakenBy:</th>
                            <th>Transport_type:</th>
                            <th>Reason:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
              houses.map((val,key) => {
                return(
                   <tr key={key}>
                                  <td>{val.StudentRollno}</td>
                                  <td>{val.StudentId}</td>
                                  <td>{val.StudentName}</td>
                                  <td>{val.Year}</td>
                                  <td>{val.Branch}</td>
                                  <td>{val.RoomNo}</td>
                                  <td>{val.OutDate}</td>
                                  <td>{val.OutTime}</td>
                                  <td>{val.Destination}</td>
                                  <td>{val.TakenBy}</td>
                                  <td>{val.Transport_type}</td>
                                  <td>{val.Reason}</td>
                   </tr>
                )
              })
             }
                    </tbody>
                </table>
            </div>   
        </div>
      </div>    
      </div>  
    </div>
  );
}
export default Day_Out_Pass_List;