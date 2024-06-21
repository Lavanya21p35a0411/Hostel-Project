import React,{useState} from "react";

function StudentsInfo(){
    let [name,setName]=useState("Mean Stack");
    let [searchname,setsearchname]=useState("");

    return(
        <div className="App">
            <h2>StudentsInfo</h2>
            {name}
            <br/>
            {searchname}
            <br/>
            <button onClick={()=>setName('Herovired')}>change name</button>
            <input type='text' placeholder='Enter name'onChange={(event)=> setsearchname(event.target.value)}/>
        </div>
    )
}

export default StudentsInfo;