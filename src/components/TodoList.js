import React from 'react';
//importing components
import Todo from './Todo';

const TodoList = ({todos, filteredTodos, setTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        setTodos={setTodos}
                        todo={todo}
                        todos={todos}
                        key={todo.id}
                        text={todo.text}
                    />
     ))}
        </ul>
      </div>  
    )
}

export default TodoList;