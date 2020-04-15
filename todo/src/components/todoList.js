import React from 'react'
import Todo from './todo';

const todoList = (props) => {
    return (
        <div>
            {props.item.map(item =>(
                <Todo dispatch={props.dispatch} item={item}/>
            ))}
        </div>
    )
}

export default todoList;