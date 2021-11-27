import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, updateTodo } from "../store/actions";

const TodoList = ({ todos, onSubmitPress,onUpdate }) => {
  console.log(todos);
  const [todoName, setTodoname] = useState("");
  const handleAdd = () => {
    let temp = {};
     temp = {
        id: todos.todos[todos.todos.length -1].id +1,
        name: todoName,
        status: false,
    }
    onSubmitPress(temp);
  };
  const handleUpdate = (t) => {
    let tem = {};
    tem =  {
      id: t.id,
      name: t.name,
      status: !t.status,
  }
  onUpdate(tem);
  }
  return (
    <div className="todo-container">
      <div className="input-wrap">
        <input
          type="text"
          placeholder="type todo to add"
          value={todoName}
          onChange={(e) => setTodoname(e.target.value)}
        />
        <button onClick={handleAdd}>submit</button>
      </div>
      <div className="wrapper">
        {todos.todos.map((t) => (
          <div
            className="todo-item"
            style={{ background: t.status ? "green" : "black" }}
            onClick={() =>handleUpdate(t)}
          >
            <p>{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmitPress: (todo) => dispatch(addTodo(todo)),
  onUpdate: (todo) => dispatch(updateTodo(todo)),
});
const mapStateToProps = (state) => ({
  todos: state,
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
