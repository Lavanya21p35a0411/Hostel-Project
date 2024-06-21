import React from 'react';
import {Link} from 'react-router-dom';

function Head(){
    return(
        <div>
            <ul>
                <li><Link to= "/Home">Home</Link></li>
                <li><Link to= "/About">About</Link></li>
                <li><Link to= "/Contact">Contact</Link></li>
                <li><Link to= "/">Button</Link></li>
                <li><Link to= "/Counter">Counter</Link></li>
                <li><Link to= "/Counter1">Counter1</Link></li>
                <li><Link to= "/Counter2">Counter2</Link></li>
                <li><Link to= "/Studentsinfo">Studentsinfo</Link></li>


            </ul>
        </div>
    )
}
 export default Head;