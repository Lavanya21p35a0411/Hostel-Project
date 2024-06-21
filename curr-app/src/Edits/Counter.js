import React from 'react';
const Counter=()=>{
    let counter=0;
    const updateCounter = () =>{
        counter=counter+1;
        console.log(counter)
    }

    return(
        <>
        <h1>Counter Value : {counter}</h1>
        <button onClick={updateCounter}>Increment</button>
        </>
    )
}

export default Counter;