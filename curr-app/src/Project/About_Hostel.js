import React from 'react';
import './About_Hostel.css';
//import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const About_Hostel=()=>{
    return(
        <>
        
        <div className='col-md-9' style={{float:"right" ,backgroundColor:"lightBlue",borderRadius:"2%",marginTop:"-1%",height:"89vh"}}>
        <div className='he-ad' style={{marginBottom:"2%",marginTop:"2%"}}><center style={{fontWeight:600}}> Dashboard</center></div>
   
        <div className='row'style={{marginLeft:"5%"}}>
            <div className='col-md-2 ah' style={{marginLeft:"0"}}>
                <div className='col-md-1'><br/></div>
                <div className='col-md-11'>Total Hostelers
                <h1>994</h1><br/>
                </div>
            </div>
            <div className='col-md-2 ah'>
            <div className='col-md-4'><br/></div>
                <div className='col-md-8'>Attended<br/><h6>02-03-2023</h6>
                <h1>801</h1><br/>
                </div>
            </div>
            <div className='col-md-2 ah'>
            <div className='col-md-4'><br/></div>
                <div className='col-md-8'>Not Attended<br/><h6>02-03-2023</h6>
                <h1>193</h1>
                </div>
            </div>

            <div className='col-md-2 ah'>
            <div className='col-md-4'><br/></div>
                <div className='col-md-8'>Thumb Created
                <h1>989</h1><br/>
                </div>
            </div>

            <div className='col-md-2 ah' >
                <div className='col-md-4'></div>
                <div className='col-md-8'>Not Created
                <h1>5</h1><br/>
                </div>
            </div>
        </div>

        <div className='row'style={{marginLeft:"5%"}}>
            <div className='col-md-2 ah' style={{marginLeft:"0"}}>
                <div className='col-md-3'><br/></div>
                <div className='col-md-9'>Block A<h6>02-03-2023</h6>
                    <h2>375/459</h2><br/>

                </div>
            </div>
            <div className='col-md-2 ah'>
            <div className='col-md-3'><br/></div>
                <div className='col-md-9'>Block B<h6>02-03-2023</h6>
                        <h2>404/512</h2><br/>

                </div>
            </div>
            <div className='col-md-2 ah'>
            <div className='col-md-3'><br/></div>
                <div className='col-md-9'>Block C<h6>02-03-2023</h6>
                        <h2>22/23</h2><br/>

                </div>
            </div>

            <div className='col-md-2 ah'>
            <div className='col-md-3'><br/></div>
                <div className='col-md-9'>North Mess<h6>02-03-2023</h6>
                        <h2>152/187</h2><br/>
                </div>
            </div>

            <div className='col-md-2 ah' >
                <div className='col-md-3'></div>
                <div className='col-md-9'>South Mess<h6>02-03-2023</h6>
                        <h2>648/806</h2><br/>
                </div>
            </div>
        </div>
        <div className='row' style={{marginLeft:"5%"}}>
            <div className='col-md-2 ah' style={{marginLeft:"0"}}>
                <div className='col-md-3'><br/></div>
                <div className='col-md-9'>Inside<h6>03-03-2023</h6>
                        <h2>123</h2><br/>
                </div>
            </div>
            <div className='col-md-2 ah'>
            <div className='col-md-3'><br/></div>
                <div className='col-md-9'>Outside<h6>03-03-2023</h6>
                        <h2>309</h2><br/>
                </div>
            </div>
            <div className='col-md-2 ah'>
            <div className='col-md-4'><br/></div>
                <div className='col-md-8'>Not punch(I&O)<h6>03-03-2023</h6>
                        <h2>562</h2>
                </div>
            </div>

            <div className='col-md-2 ah'>
            <div className='col-md-4'><br/></div>
                <div className='col-md-8'>OwlCoder<h6>02-03-2023</h6>
                        <h2>0/84</h2><br/>
                </div>
            </div>

            {/* <div className='col-md-2 ah' >
                <div className='col-md-4'></div>
                <div className='col-md-8'>Not Created
                <h1>5</h1><br/>
                </div>
            </div> */}
        </div>
    </div>
    </>
    );
}

export default About_Hostel;