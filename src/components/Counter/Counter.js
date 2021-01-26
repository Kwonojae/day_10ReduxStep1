import React from 'react';

const Counter = ({color,cnt, increment, decrement, reset}) => {
    return (
        <div>
            <h1 style={{fontSize:30, color:color}}>카운터 : {cnt}</h1>
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감소</button>
            <button onClick={reset}>리셋</button>
        </div>
    );
};

export default Counter;