import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState} from 'react';
import { Button,Modal,Input } from 'react-bootstrap';
import './Attendance_reports.css';
function Pass_reports(){
    const [date,setDate]=useState();
    console.log("Date",date);
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () =>setShow(true);
        const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }
    return(
        <div className="col-md-9" style={{border:"solid black 1px",float:"right",backgroundColor:"lightBlue"}}>
            <h3 className="" style={{color:"black",marginBottom:"-15px",marginTop:"1%"}}><center>Pass Reports</center></h3><br/>
             <div className='Attedance' style={{alignContent:"center",marginTop:"3%"}}>
            <h2 style={{marginTop:"0px",marginLeft:"30%"}}>Reports</h2>
            <hr/>
            <div className='row'>
                 <div className='col-md-6'>
                 <label style={{"fontSize":"130%","fontWeight":"600","marginLeft":"1%"}}>Select Report Name:</label>
                 <form style={{marginLeft:"10px"}}>
                   <select value={myCar} onChange={handleChange} style={{"fontSize":"60%"}}>
                   <option value="Ford">Evening PassReports</option>
                   <option value="Volvo">Volvo</option>
                   <option value="Fiat">Fiat</option>
                   </select>
                 
                 </form>
                 </div>
                 <div className='col-md-6'>
                 <h5 style={{marginLeft:"15px"}}>To Date:</h5>
                  <input style={{marginTop:"10%",marginLeft:"15px","fontSize":"60%"}} type="date" name="Date" placeholder="date" value="date" onChange={e=>setDate(e.target.value)}/>
                 </div>
             </div>
             <br/><div className='row' style={{marginTop:"-10%"}}>
                 <div className='col-md-6'>
                     <button type="cancel" style={{marginLeft:"20px",marginTop:"20px",float:"left"}}>Cancel</button>
                 </div>
                 <div className='col-md-6'>
                     <button type="submit" style={{float:"right",marginTop:"20px",marginRight:"30px"}}>Submit</button>
                 </div>
             </div>
         </div>
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div className="row " style={{marginTop:"-20px",marginBottom:"-10px"}}>
           <div className="col-sm-3 mt-5 mb-4 text-gred">
               {/* <button  variant="success" onClick={handleShow} style={{marginRight:"3%"}}>Copy</button>
               <button  variant="success" onClick={handleShow} style={{marginRight:"3%"}}>CSV</button>
               <button  variant="success" onClick={handleShow} style={{marginRight:"3%"}}>Excel</button>
               <button  variant="success" onClick={handleShow} style={{marginRight:"3%"}}>Print</button> */}
            </div> 
              <div className="col-sm-9 mt-5 mb-4 text-gred">
              <div className="search" style={{float:"right",marginRight:"2px"}}>
                <form className="form-inline">
                 {/* <input className="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search" /> */}
                </form>
              </div>    
            </div>
           </div>  
            <div className="row">
                <div className="table-responsive " >
                 <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Roll No</th>
                            <th>Biometric ID</th>
                            <th>Student Name</th>
                            <th>College</th>
                            <th>Branch</th>
                            <th>Out Date & Time</th>
                            <th>Destination</th>
                            <th>Type</th>
                            <th>Reason</th>
                            <th>Mess</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>21p35a0411</td>
                            <td>10021</td>
                            <td>A.Lavanya</td>
                            <td>ACET</td>
                            <td>ECE</td>
                            <td>2023-03-03  07-45-08</td>
                            <td>Tuni</td>
                            <td>Self</td>
                            <td>Hospital Visit</td>
                            <td>NORTH</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>21p35a0412</td>
                            <td>10022</td>
                            <td>K.sudha</td>
                            <td>ACE</td>
                            <td>CSE</td>
                            <td>2023-03-03  07:45:08</td>
                            <td>VIZAG</td>
                            <td>Self</td>
                            <td>Self Outing</td>
                            <td>SOUTH</td>
                        </tr>
                        <tr>
                        <td>3</td>
                            <td>21p35a0413</td>
                            <td>10023</td>
                            <td>M.Thanuja Sri</td>
                            <td>ACE</td>
                            <td>ECE</td>
                            <td>2023-03-04  07:45:08</td>
                            <td>hYDERABAD</td>
                            <td>Self</td>
                            <td>Outing</td>
                            <td>NORTH</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>21p35a0414</td>
                            <td>10024</td>
                            <td>Y.Vinod</td>
                            <td>ACET</td>
                            <td>CSE</td>
                            <td>2023-04-03  02:41:23</td>
                            <td>Suramplaem</td>
                            <td>Self</td>
                            <td>Hospital Visit</td>
                            <td>NORTH</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>21p35a0415</td>
                            <td>10025</td>
                            <td>K.Karthik</td>
                            <td>ACE</td>
                            <td>CSE</td>
                            <td>2023-02-01  02:13:12</td>
                            <td>Srikakulam</td>
                            <td>Self</td>
                            <td>Outing</td>
                            <td>SOUTH</td>
                        </tr>
                    </tbody>
                </table>
            </div>   
        </div>
        {/* <!--- Model Box ---> */}
        <div className="model_box">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Record</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <form>
                <div className="form-group">
                    <input type="name" className="form-control" id="name"  placeholder="Enter Name"/>
                </div>
                <div className="form-group mt-3">
                    <input type="email" className="form-control" id="email"  placeholder="Enter mail"/>
                </div>
                <div className="form-group mt-3">
                    <input type="password" className="form-control" id="epassword"  placeholder="Enter password"/>
                </div>
                <div className="form-group mt-3">
                    <input type="country" className="form-control" id="country" placeholder="Enter Country"/>
                </div>
                <button type="submit" className="btn btn-success mt-4">Add Record</button>
                </form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
       {/* Model Box Finsihs */}
       </div>  
      </div>
    </div>
    )
}
export default Pass_reports;