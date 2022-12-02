import React, { useContext, useState, useEffect } from "react";
import TodoItem from "./TodoItem";

import TodoContext from "../../context/TodoContext";

import "./TodoList.scss";

const TodoList = () => {
    const { todoList, filterStatus, setTodoList } = useContext(TodoContext);

    const [filteredItems, setFilteredItems] = useState([]);

    // RUNs ONLY ONCE
    useEffect(() => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
            setTodoList([]);
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            console.log(todoLocal);

            setTodoList(todoLocal);
        }
    }, []);

    // TRIGGER FUNCTION ONLY WEHN TODOLIST OR FILTERSTATUS UPDATEs
    useEffect(() => {
        switch (filterStatus) {
            case "completed":
                setFilteredItems(
                    todoList.filter((el) => el.completed === true)
                );
                break;
            case "uncompleted":
                setFilteredItems(
                    todoList.filter((el) => el.completed === false)
                );
                break;
            default:
                setFilteredItems(todoList);
                break;
        }

        localStorage.setItem("todos", JSON.stringify(todoList));
    }, [todoList, filterStatus]);

    return (
        <div className="md-todo">
            <ul className="md-todo__list">
                {filteredItems.map((item) => (
                    <TodoItem
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        completed={item.completed}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
