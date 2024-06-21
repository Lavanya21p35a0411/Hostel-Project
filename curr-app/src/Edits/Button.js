import React from 'react'

const Button =() => {

    function Sample(){
        alert("Testing Sample")
    }

function Games(fav_game){
        alert(fav_game)
}
     
    return(
        <div className='App'>
            <button onClick={Sample}>Click me!</button>
            <button onClick={() => Games('Kabaddi')}>Click me for fav game!</button>

        </div>
    )
}

export default Button;