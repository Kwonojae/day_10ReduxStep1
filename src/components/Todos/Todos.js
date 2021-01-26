import  React, { useRef, useState } from 'react'
import '../../utils/css/reset.scss'
import './Todo.css'
import Form from './Form';
import List from './List';

const Todos = ({input,todos, insert, remove, toggle, changeInput}) => { 
    return (
        <div className="Todo">
            <h1>Todo List</h1>
            <Form 
                input={input}
                insert={insert}
                changeInput={changeInput}
            />
            <List 
                todos={todos}
                remove={remove}
                toggle={toggle}
            />
        </div>
    );
};

export default Todos;