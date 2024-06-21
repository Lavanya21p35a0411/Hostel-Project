import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState} from 'react';
import { Button,Modal,Input } from 'react-bootstrap';
import './Attendance_reports.css';
function Attedance_reports(){
    const [date,setDate]=useState();
    console.log("Date",date);
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () =>setShow(true);
    return(
        <div className="col-md-9" style={{border:"solid black 1px",overflowY:"scroll",float:"right"}}> 
            <h3 className="" style={{color:"black",marginBottom:"-20px",marginTop:"1%"}}><center>Attedance Reports</center></h3>
             <div className='Attedance' >
            <h2 style={{marginTop:"5px",marginLeft:"15px"}}>Reports</h2>
            <hr/>
             <h4 style={{float:"left",marginTop:"10px",marginLeft:"15px"}}>Date:</h4><br/>
             <input style={{float:"left",marginTop:"30px",marginLeft:"-35px",fontSize:"50%"}} type="date" name="Date" placeholder="date" value="date" onChange={e=>setDate(e.target.value)}/><br/><br/>
             <br/>
             <div className='row'>
                 <div className='col-md-6'>
                     <button type="cancel" style={{marginLeft:"10%",marginTop:"20px",float:"left",fontSize:"100%"}}>Cancel</button>
                 </div>
                 <div className='col-md-6'>
                     <button type="submit" style={{float:"right",marginTop:"20px",marginRight:"30px"}}>Submit</button>
                 </div>
             </div>
            </div>
        {/* <h3 className="" style={{color:"red",marginBottom:"-20px"}}>Attedance Reports</h3> */}
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div className="row " style={{marginTop:"-23px",marginBottom:"-10px"}}>
           <div className="col-sm-3 mt-5 mb-4 text-gred">
               {/* <button  variant="success" onClick={handleShow} style={{marginRight:"3%"}}>Copy</button> */}
               {/* <button  variant="success" onClick={handleShow} style={{marginRight:"3%"}}>CSV</button> */}
               {/* <button  variant="success" onClick={handleShow} style={{marginRight:"3%"}}>Excel</button> */}
               {/* <button  variant="success" onClick={handleShow} style={{marginRight:"3%"}}>Print</button> */}
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
                            <th>Roll Number </th>
                            <th>Biometric Id</th>
                            <th>Student Name</th>
                            <th>Student Mobile </th>
                            <th>Parent Mobile</th>
                            <th>Room</th>
                            <th>Log Date</th>
                            <th>Mess</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>22P31A0135</td>
                            <td>220001</td>
                            <td>PRIYA KUMARI</td>
                            <td>9523175210</td>
                            <td>9779845119</td>
                            <td>B509</td>
                            <td>2023-02-28  18:15:31</td>
                            <td>NORTH</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>22BBADM00</td>
                            <td>220002</td>
                            <td>VISWANADHAM TANUJA</td>
                            <td>8297206396</td>
                            <td>8988746350</td>
                            <td>B229</td>
                            <td><td>2023-02-28  18:14:37</td></td>
                            <td>NORTH</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>22IMBA0041</td>
                            <td>220003</td>
                            <td>P SRI VATSA REDDY</td>
                            <td>9494551268</td>
                            <td>9701999933</td>
                            <td>BG10</td>
                            <td>2023-02-28  18:15:34</td>
                            <td>NORTH</td>
                        </tr>
                        <tr>
                        <td>4</td>
                            <td>22BBA0064</td>
                            <td>220004</td>
                            <td>MATTAPARTHI CHANDRIKA</td>
                            <td>9666441881</td>
                            <td>9932331766</td>
                            <td>B229</td>
                            <td>2023-02-28  18:12:37</td>
                            <td>NORTH</td>
                        </tr>
                        <tr>
                        <td>5</td>
                            <td>22IMBA0013</td>
                            <td>220005</td>
                            <td>T MANASA</td>
                            <td>8900579261</td>
                            <td>9701417350</td>
                            <td>B229</td>
                            <td>2023-02-28  19:41:37</td>
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
export default Attedance_reports;