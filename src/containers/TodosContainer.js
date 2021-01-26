import React from 'react';
import { connect } from 'react-redux';
import { Todos } from '../components';
import {insert, remove, toggle, changeInput} from '../store/modules/todos';

const TodosContainer = ({input,todos, insert, remove, toggle, changeInput}) => {
    return (
        <div>
            <Todos
            input={input}
            todos={todos}
            insert={insert}
            remove={remove}
            toggle={toggle}
            changeInput={changeInput}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    input : state.todos.input, 
    todos : state.todos.todos
})
const mapDispatchToProps = (dispatch) => ({
    insert : (text) => dispatch(insert(text) ),
    remove : (id) => dispatch(remove(id) ),
    toggle : (id) => dispatch(toggle(id) ),
    changeInput : (text) => dispatch(changeInput(text) )
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (TodosContainer);