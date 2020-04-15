import React from 'react';

const Todo = props => {
    return(
        <div className= {`item ${props.item.completed ? 'completed' : '' }`}
        onClick={() => props.dispatch({ type: 'TOGGLE_TODO', payload: props.item})}>
            <h2>{props.item.item}</h2>
        </div>
    )
}

export default Todo;