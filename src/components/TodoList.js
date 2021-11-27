import React, {useState} from "react";
import {connect} from 'react-redux';
import {addTodo} from '../store/actions'

const TodoList = ({todos, onSubmitPress}) => {
    console.log(todos);
    const [todoName,setTodoname ] = useState('');
  return (
    <div className="todo-container">
        <input 
        type="text"
        placeholder="type todo to add"
        value={todoName}
        onChange={(e)=>setTodoname(e.target.value)}
        />
        <button onClick={()=>onSubmitPress({id: 1,
        name: todoName,
        status: false})}>submit</button>
        <div className="wrapper">
     {todos.todos.map(t => <div className="todo-item" style={{background: t.status ? 'green':'black'}}>
         <p>{t.name}</p>
         </div>)}
         </div> 
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
    onSubmitPress: todo => dispatch(addTodo(todo)),
});
const mapStateToProps = state => ({
    todos: state,
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
