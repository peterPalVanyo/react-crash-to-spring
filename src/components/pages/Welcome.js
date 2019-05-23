import React from 'react';
import finalshop1 from './finalshop1.jpg';

console.log(finalshop1);

function Welcome(){

    return(
        <div style={welcomeStyle} className="welcome">
            <img src={finalshop1} alt="nincs kep"/>
            <p>hello</p>
        </div>
        
    )

}

const welcomeStyle = {
    // paddingTop: '10px',
}

export default Welcome;