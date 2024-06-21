import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import { Button,Modal,Input } from 'react-bootstrap';
function Students() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    

    <div className='col-md-9' style={{"float":"right",backgroundColor:"lightblue",borderRadius:"2%",marginTop:"-1%",height:"87vh"}}>
       <div className="container-fluid" style={{marginBottom:"-20px",marginTop:"5%",border:"solid black 1px"}}>
        <div style={{marginTop:"0.7%"}}><h3 className="" style={{color:"black",paddingBottom:"0.5%",paddingTop:"0.5%"}}><center>Total Students</center></h3></div><hr/>
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"      > 
          <div className="row " style={{marginTop:"-30px",marginBottom:"-20px",marginLeft:"8%"}} >
           <div className="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form className="form-inline">
                 <input style={{marginLeft:"-40%"}} className="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search"/>
                </form>
              </div>    
            </div>  
              <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green",marginLeft:"13%"}}><h2><b>Student Details</b></h2></div>
              <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred" style={{marginLeft:"12%"}}>
              {/* <Button variant="primary" onClick={handleShow}>Add New Student</Button> */}
             </div>
           </div>  
            <div className="row" style={{marginTop:"2%"}}>
                <div className="table-responsive " >
                 <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Roll Number </th>
                            <th>Biometric Id</th>
                            <th>Student Name</th>
                            <th>College </th>
                            <th>Branch</th>
                            <th>State</th>
                            <th>Student Mobile </th>
                            <th>Parent Mobile</th>
                            <th>Mother Mobile </th>
                            <th>Guardian Mobile</th>
                            <th>AC/NAC</th>
                            <th>Room</th>
                            <th>Mess</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>22P31A0135</td>
                            <td>220001</td>
                            <td>PRIYA KUMARI</td>
                            <td>ACET</td>
                            <td>CIVIL</td>
                            <td>NEPAL</td>
                            <td>9523175210</td>
                            <td>9779845119</td>
                            <td>9779840038</td>
                            <td>9779821835</td>
                            <td>NAC</td>
                            <td>B509</td>
                            <td>NORTH</td>
                            
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>22BBADM00</td>
                            <td>220002</td>
                            <td>VISWANADHAM TANUJA</td>
                            <td>AGBS</td>
                            <td>BBA</td>
                            <td>A.P</td>
                            <td>9618526396</td>
                            <td>9492919157</td>
                            <td>8297206396</td>
                            <td>8988746350</td>
                            <td>NAC</td>
                            <td>B229</td>
                            <td>SOUTH</td>
                            
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>22IMBA0041</td>
                            <td>220003</td>
                            <td>P SRI VATSA REDDY</td>
                            <td>AGBS</td>
                            <td>MBA</td>
                            <td>A.P</td>
                            <td>8985022222</td>
                            <td>9440230066</td>
                            <td>9494551268</td>
                            <td>9701999933</td>
                            <td>AC</td>
                            <td>BG10</td>
                            <td>SOUTH</td>
                            
                        </tr>
                        <tr>
                        <td>4</td>
                            <td>22BBA0064</td>
                            <td>220004</td>
                            <td>MATTAPARTHI CHANDRIKA</td>
                            <td>AGBS</td>
                            <td>BBA</td>
                            <td>A.P</td>
                            <td>7416511881</td>
                            <td>8121649559</td>
                            <td>9666441881</td>
                            <td>9932331766</td>
                            <td>NAC</td>
                            <td>B229</td>
                            <td>SOUTH</td>
                          
                        </tr>
                        <tr>
                        <td>5</td>
                            <td>22IMBA0013</td>
                            <td>220005</td>
                            <td>T MANASA</td>
                            <td>AGBS</td>
                            <td>BBA</td>
                            <td>A.P</td>
                            <td>8317619882</td>
                            <td>8170005152</td>
                            <td>8900579261</td>
                            <td>9701417350</td>
                            <td>NAC</td>
                            <td>B229</td>
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
      </div>
      </>
  );
}
export default Students;