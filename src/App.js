import React, { useState } from "react";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import TodoList from "./components/Todo/TodoList";

// IMPORTING PROVIDER
import { TodoProvider } from "./context/TodoContext";

function App() {
    return (
        <div className="App">
            <TodoProvider>
                <div className="container">
                    <Header></Header>
                    <Form />
                    <TodoList />
                </div>
            </TodoProvider>
        </div>
    );
}

export default App;
