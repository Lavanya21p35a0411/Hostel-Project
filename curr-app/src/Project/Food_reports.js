import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState} from 'react';
import { Button,Modal,Input } from 'react-bootstrap';
import './Attendance_reports.css';
function Food_reports(){
    const [date,setDate]=useState();
    console.log("Date",date);
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () =>setShow(true);
    return(
        <div className="col-md-9" style={{border:"solid black 1px",float:"right"}}>
            <h3 className="" style={{color:"black",marginBottom:"-20px",marginTop:"1%"}}><center>Food Reports</center></h3>
             <div className='Attedance' style={{alignContent:"center",}}>
            <h2 style={{marginTop:"5px",marginLeft:"15px"}}>Reports</h2>
            <hr/>
            <div className='row'>
                 <div className='col-md-6'>
                 <h5 style={{marginLeft:"15px"}}>From Date:</h5>
                 <input style={{marginTop:"5px",marginLeft:"15px",fontSize:"50%"}} type="date" name="Date" placeholder="date" value="date" onChange={e=>setDate(e.target.value)}/>
                 </div>
                 <div className='col-md-6'>
                 <h5 style={{marginLeft:"15px"}}>To Date:</h5>
                  <input style={{marginTop:"5px",marginLeft:"15px",fontSize:"50%"}} type="date" name="Date" placeholder="date" value="date" onChange={e=>setDate(e.target.value)}/>
                 </div>
             </div>
             <div className='row'>
                 <div className='col-md-6'>
                     <button type="cancel" style={{marginLeft:"20px",marginTop:"20px",float:"left"}}>Cancel</button>
                 </div>
                 <div className='col-md-6'>
                     <button type="cancel" style={{marginLeft:"20px",marginTop:"20px",float:"left"}}>Button</button>
                 </div>
                 
             </div>
         </div>
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div className="row " style={{marginTop:"-20px",marginBottom:"-10px"}}>
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
                            <th>Date</th>
                            <th>Total Students</th>
                            <th>Attended Students</th>
                            <th>Total Staff</th>
                            <th>Attended Staff</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>26-02-2023</td>
                            <td>994</td>
                            <td>700</td>
                            <td>70</td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>27-02-2023</td>
                            <td>994</td>
                            <td>710</td>
                            <td>70</td>
                            <td>66</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>28-03-2023</td>
                            <td>994</td>
                            <td>680</td>
                            <td>70</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>1-03-2023</td>
                            <td>994</td>
                            <td>702</td>
                            <td>70</td>
                            <td>62</td>
                        </tr>
                        <tr>
                        <td>5</td>
                            <td>2-03-2023</td>
                            <td>994</td>
                            <td>704</td>
                            <td>70</td>
                            <td>62</td>
                        </tr>
                    </tbody>
                </table>
            </div>   
        </div>
        {/* <!--- Model Box ---> */}
        <div className="model_box">
      {/* <Modal
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
                <button  type="submit" className="btn btn-success mt-4">Add Record</button>
                </form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal> */}
       {/* Model Box Finsihs */}
       </div>  
      </div>
    </div>
    )
}
export default Food_reports;