import React ,{useState} from 'react';
import axios from 'axios';
const Registration_form=()=>{
    const [send,setSend] = useState({
        FirstName:"",
        LastName:"",
        RollNo:"",
        mobilenumber:"",
        Email:"",
        Password:""
    })
    const handleChange = (e) => {
        setSend((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
    const postSubmit = (e) =>{
       e.preventDefault()
       axios.post('http://localhost:5000/postdata',{send})
       console.log(send)
       alert('Success')
    }
    return(
        <>
        <div className='col-md-9' style={{"float":"right",backgroundColor:"lightblue",borderRadius:"2%",marginTop:"-1%",height:"87vh"}}>
        
        <div style={{marginTop:"2%"}}><p id="form2"><b><h2><center>Registration Form</center></h2></b></p></div>
       <div  className="ddd" style={{width:"100vh",overflowX:"scroll"}}>
         <div className="container-fluid" id="form1" >
         {/* <div className="row"> */}
           {/* <div className="col-md-3"></div> */}
           {/* <div className="col-md-6"> */}
            <form>
              <div >
                 <label style={{color:"green"}}for="Name" >First name:</label>
                 <input type="text" className="form-control" name="First name" onChange={handleChange} placeholder="Enter your first name"/>
              </div><br/>
              <div className="form-group">
                 <label style={{color:"green"}}>Last name</label>
                 <input type="text" className="form-control" name="Last name" onChange={handleChange} placeholder="Enter Last name"/>
              </div>
              <div style={{color:"green"}}className="form-group">
                 <label >Pin number</label>
                 <input type="text" className="form-control"name="Pin number" onChange={handleChange} placeholder="Enter pin number"/>
              </div>
              <div className="form-group">
                 <label style={{color:"green"}}>E-mail</label>
                 <input type="mail" className="form-control" name="E-mail"  placeholder="Enter your email"  onChange={handleChange} />
              </div>
              <div style={{color:"green"}} className="form-group">
                 <label >Mobile Number:</label>
                 <input type="text" className="form-control" name="Mobile Number" onChange={handleChange} placeholder="Enter your mobile number"/>
              </div>
              <div style={{color:"green"}}className="form-group">
                 <label >Set Password</label>
                 <input type="password" className="form-control" name="Set password" onChange={handleChange} placeholder="Enter password"/>
              </div>
              <div style={{color:"green"}}className="form-group">
                 <label >confirm Password</label>
                 <input type="password" className="form-control" name="confirm password" onChange={handleChange} placeholder="Enter password"/>
              </div>
              <br></br>
                   <button style={{marginBottom:"3%"}} type="submit" onClick={postSubmit} className="btn btn-primary">Submit</button>
            </form>      
         </div>
         </div></div>
         {/* </div> */}
        {/* </div> */}
        </>
    )
}
export default Registration_form;