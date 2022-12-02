import React, { useContext, useState } from "react";

const TodoContext = React.createContext();

export function TodoProvider({ children }) {
    const [todoList, setTodoList] = useState([]);
    const [filterStatus, setFilterStatus] = useState("");

    const onAddTodo = (text) => {
        setTodoList((prev) => [
            ...prev,
            {
                text: text,
                completed: false,
                id: Math.random() * 1000,
            },
        ]);
    };

    const onDelete = (text) => {
        setTodoList((prev) => prev.filter((value) => value.text !== text));
    };

    const onComplete = (text) => {
        setTodoList((prev) =>
            prev.map((value) => {
                if (value.text === text) {
                    return { ...value, completed: !value.completed };
                } else {
                    return { ...value };
                }
            })
        );
    };

    return (
        <TodoContext.Provider
            value={{
                todoList,
                setTodoList,
                filterStatus,
                setFilterStatus,
                onAddTodo,
                onComplete,
                onDelete,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export default TodoContext;
