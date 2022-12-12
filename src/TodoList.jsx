import React from 'react';

const TodoList = (props) => {
    // return todo's from map function with id
    // when delete button is clicked it provides unique id so that is is deleted
    return (
        <li>
            <p>{props.text}</p><i className="fa-solid fa-xmark" onClick={() => {
                props.onSelect(props.id)
            }}></i>
        </li>
    )
}

export default TodoList;
