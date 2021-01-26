import React from 'react';
import Item from './Item';
import './List.css'


const List = ({todos, remove, toggle}) => {
    return (
        <div className="List">
            <ul>
                {
                    todos.map( todo => <Item key={todo.id} 
                        todo ={ todo }
                        remove = { remove }
                        toggle = { toggle }
                    />)
                }
            </ul>
        </div>
    );
};

export default List;