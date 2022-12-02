import React, { useState, useEffect, useContext } from "react";
import TodoContext from "../../context/TodoContext";

import "./Select.scss";
import "./Form.scss";

const Form = (props) => {
    const { onAddTodo, setFilterStatus } = useContext(TodoContext);

    // TEMPORARY TODO ITEM
    const [todo, setTodo] = useState({
        text: "",
        touched: false,
        valid: false,
    });

    // INPUT CLASS
    let inputClass =
        todo.touched && !todo.valid
            ? "md-form__input invalid"
            : "md-form__input";

    // SET STATE
    const addTodoHandler = (e) => {
        setTodo({
            ...todo,
            text: e.target.value,
        });
    };

    // SUBMIT
    const onSubmitHandler = (e) => {
        e.preventDefault();

        // CHECK IF INPUT IS EMPTY
        if (todo.text.trim() === "") {
            setTodo({
                text: "",
                touched: true,
                valid: false,
            });
            return;
        }

        // PUSH ITEM IN CONTEXT
        onAddTodo(todo.text, (prev) => [
            ...prev,
            { text: todo.text, completed: false, id: Math.random() * 1000 },
        ]);

        // RESET TODO
        setTodo({
            text: "",
            touched: false,
            valid: false,
        });
    };

    const setFilterHandler = (e) => {
        setFilterStatus(e.target.value);
    };

    return (
        <form className="md-form md-todo" onSubmit={onSubmitHandler}>
            <div className="md-form__input-wrapper w-70">
                <input
                    onChange={addTodoHandler}
                    type="text"
                    value={todo.text}
                    className={inputClass}
                />
                <button className="md-form__button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
            </div>
            <div className="md-form__input-wrapper w-30">
                <select
                    onChange={setFilterHandler}
                    name="todos"
                    className="md-form__filter select"
                >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
                <div className="md-form__arrow"></div>
            </div>
        </form>
    );
};

export default Form;
