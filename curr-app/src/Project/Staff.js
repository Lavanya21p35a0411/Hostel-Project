import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import { Button,Modal,Input } from 'react-bootstrap';
function Staff() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div className='col-md-9' style={{"float":"right",backgroundColor:"lightblue",borderRadius:"2%",marginTop:"-1%",height:"87vh"}}>
       <div className="container-fluid" style={{marginBottom:"-20px",marginTop:"5%",border:"solid black 1px"}}>
        <div style={{marginTop:"0.7%"}}><h3 className="" style={{color:"black",paddingBottom:"0.5%",paddingTop:"0.5%"}}><center>Total Staff</center></h3></div><hr/>
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"      > 
          <div className="row " style={{marginTop:"-30px",marginBottom:"-20px",marginLeft:"8%"}} >
           <div className="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form className="form-inline">
                 <input style={{marginLeft:"-40%"}} className="form-control mr-sm-2" type="search" placeholder="Search Staff" aria-label="Search"/>
                </form>
              </div>    
            </div>  
              <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green",marginLeft:"13%"}}><h2><b>Staff Details</b></h2></div>
              <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred" style={{marginLeft:"12%"}}>
              {/* <Button variant="primary" onClick={handleShow}>Add New Student</Button> */}
             </div>
           </div>  
            <div className="row"style={{marginTop:"2%"}}>
                <div className="table-responsive " >
                <table className="table table-striped table-hover table-bordered">
                <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Emp Id </th>
                            <th>Biometric Id</th>
                            <th>Staff Name</th>
                            <th>Designation</th>
                            <th>College</th>
                            <th>Branch</th>
                            <th>State</th>
                            <th>Mobile</th>
                            <th>Room</th>
                            <th>Mess</th>
                            <th>P/NP</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>7645</td>
                            <td>9445</td>
                            <td>PRIYA KUMARI</td>
                            <td>ASST PROFFCER</td>
                            <td>ACET</td>
                            <td>CIVIL</td>
                            <td>AP</td>
                            <td>99878845432</td>
                            <td>A201</td>
                            <td>SOUTH</td>
                            <td>NP</td>
                            <td>
                               <a href="#" className="view" title="View"  style={{color:"#10ab80"}}><center><i className="material-icons">&#xE417;</i></center></a> 
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>4322</td>
                            <td>7668</td>
                            <td>LAVANYA</td>
                            <td>LECTURER</td>
                            <td>ACET</td>
                            <td>ECE</td>
                            <td>AP</td>
                            <td>8966472752</td>
                            <td>A202</td>
                            <td>SOUTH</td>
                            <td>NP</td>
                            <td>
                            <a href="#" className="view" title="View"  style={{color:"#10ab80"}}><center><i className="material-icons">&#xE417;</i></center></a>
                               
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>6643</td>
                            <td>9475</td>
                            <td>G SANDHYA</td>
                            <td>LIBRARIAN</td>
                            <td>ACE</td>
                            <td>EEE</td>
                            <td>AP</td>
                            <td>6849300349</td>
                            <td>A203</td>
                            <td>NORTH</td>
                            <td>NP</td>
                            <td>
                            <a href="#" className="view" title="View"  style={{color:"#10ab80"}}><center><i className="material-icons">&#xE417;</i></center></a>
                                
                            </td>
                        </tr>
                        <tr>
                        <td>4</td>
                            <td>7007</td>
                            <td>6543</td>
                            <td>P ARIYA</td>
                            <td>HEAD OF DEPT</td>
                            <td>ACET</td>
                            <td>ECE</td>
                            <td>AP</td>
                            <td>7683999349</td>
                            <td>A204</td>
                            <td>SOUTH</td>
                            <td>NP</td>
                            <td>
                            <a href="#" className="view" title="View"  style={{color:"#10ab80"}}><center><i className="material-icons">&#xE417;</i></center></a>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>7876</td>
                            <td>8764</td>
                            <td>R VINOD</td>
                            <td>ASST PROFFCER</td>
                            <td>ACOE</td>
                            <td>MECHANICAL</td>
                            <td>AP</td>
                            <td>9099457334</td>
                            <td>A205</td>
                            <td>SOUTH</td>
                            <td>NP</td>
                            <td>
                            <a href="#" className="view" title="View"  style={{color:"#10ab80"}}><center><i className="material-icons">&#xE417;</i></center></a>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>6655</td>
                            <td>9088</td>
                            <td>A ARUNA</td>
                            <td>LECTURER</td>
                            <td>ACET</td>
                            <td>CIVIL</td>
                            <td>AP</td>
                            <td>8008456977</td>
                            <td>A206</td>
                            <td>SOUTH</td>
                            <td>NP</td>
                            <td>
                            <a href="#" className="view" title="View"  style={{color:"#10ab80"}}><center><i className="material-icons">&#xE417;</i></center></a>
                               
                            </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>5670</td>
                            <td>4588</td>
                            <td>K KUMARI</td>
                            <td>ASST PROFFCER</td>
                            <td>ACET</td>
                            <td>IT</td>
                            <td>AP</td>
                            <td>9988786867</td>
                            <td>A207</td>
                            <td>NORTH</td>
                            <td>NP</td>
                            <td>
                            <a href="#" className="view" title="View"  style={{color:"#10ab80"}}><center><i className="material-icons">&#xE417;</i></center></a>
                                
                            </td>
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
      </div>
      </> 
  );
}
export default Staff;