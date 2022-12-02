import React, { useContext } from "react";

import TodoContext from "../../context/TodoContext";

import "./TodoItem.scss";

const TodoItem = (props) => {
    // USING TODOCONTEXT
    const { onComplete, onDelete } = useContext(TodoContext);

    // ON DELETE
    const onDeleteHandler = () => {
        onDelete(props.text);
    };

    // ON COMPLETE
    const onCheckHandler = () => {
        onComplete(props.text);
    };

    // LI CLASSES
    const liClasses = !props.completed
        ? "md-todo__item"
        : "md-todo__item completed";

    return (
        <>
            <li className={liClasses} key={props.id}>
                {props.text}
                <button id={props.id} onClick={onCheckHandler}>
                    <i className="fas fa-check"></i>
                </button>
                <button id={props.id} onClick={onDeleteHandler}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        </>
    );
};

export default TodoItem;
