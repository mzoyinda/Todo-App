import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
//handling events
    const inputTextHandlers = (e) => {
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: inputText, completed:false, id: Math.random() * 100 }]);
        setInputText("");
    };
  const statusHandler = (e) => {
      setStatus(e.target.value)
    }
    return (
        <form>
      <input type="text" value={inputText} onChange={inputTextHandlers} className="todo-input" />
      <button className="todo-button" onClick={submitTodoHandler} type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    )
}

export default Form;