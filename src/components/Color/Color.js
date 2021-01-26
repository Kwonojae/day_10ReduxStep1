import React from 'react';

const Color = ({color,red,green,pink,skyblue,yellow}) => {
    return (
        <div>
            <h1 style={{fontSize:30, color:color}}>색{color}</h1>
            <p>
                <button onClick={red}>RED</button>
                <button onClick={green}>GREEN</button>
                <button onClick={pink}>PINK</button>
                <button onClick={skyblue}>SKYBLUE</button>
                <button onClick={yellow}>YELLOW</button>
            </p>       
        </div>
    );
};

export default Color;