import React,{useState} from 'react';
import Student from "./Student";
function Trainees(){
    let[names,updateNames] = useState(['arun','ashu','anil'])
    return(
        <div className="App">Trainees
            <ul>
                {
                    names.map((ele,i)=> {
                        return (<Student name={ele}/>)
                    })
                }
            </ul>
        </div>
    )
}

export default Trainees;