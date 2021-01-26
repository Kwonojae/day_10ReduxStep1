import React from 'react';
import './Item.css'

const Item = ({todo, remove,toggle}) => {
    return (
        <>
            <li className="Item">
                <span className={`${todo.done && 'on'}`}
                    onClick= {() => toggle(todo.id)}
                > &#10003;  </span>
                <em className={`${todo.done && 'on'}`}
                    onClick= {() => toggle(todo.id)}
                > {todo.text}  </em> 
                <button onClick={() => remove(todo.id)}>삭제</button>
            </li>
        </>
    );
};

export default Item;