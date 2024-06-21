
import {useState} from 'react'
const Form = () =>{
    let[rollno, setRollno] = useState("");
    let[name, setName] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("My Roll No is", rollno)
        console.log("My Name is", name)

    }
    return(
        <>
        <div className='container'>
            <br/>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label for="rollno">Roll No.</label>
                    <input type="text" name="rollno" className='form-control'/>
                    
                    '
                </div>
            </form>
        </div>
        </>
    )

}