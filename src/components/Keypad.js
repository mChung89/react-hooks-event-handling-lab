// Code Keypad Component Here
import React from 'react';

function Keypad() {
    function enterPassword () {
        console.log("Entering password...")
    }
    return <input onChange={enterPassword} type="password"></input>
}

export default Keypad;