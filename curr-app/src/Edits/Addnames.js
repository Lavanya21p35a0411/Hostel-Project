import React,{useState} from 'react';
import Student from './Student';

function Addnames(){
    let [names,updateNames]=useState('akhi','abhi');
    let [studentname, setStudentname] = useState('');

    const addStudent= (student)=>{
        updateNames([...names,student])
    }


    return(
        <div className="App">
        <input type='text' placeholder='Enter name'onChange={(event)=> setStudentname(event.target.value)}/>
        <button onClick={()=> addStudent(studentname)}>add name</button>
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

export default Addnames;