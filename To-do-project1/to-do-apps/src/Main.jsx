import './App.css';
import './style.css';
import { useState } from 'react';
function Main()
{
  const [todoitems, setTodoItems]=useState([]);

const addTodo=(todo)=>{
  setTodoItems([...todoitems,todo]);
};
const removeTodo=(index)=>{
  const newTodoItems=[...todoitems];
  newTodoItems.splice(index,1);
  setTodoItems(newTodoItems);
}
return (
  <div className="container">
    <h1 className='heading'>TO DO APP</h1>
    <h2>Programming with Sunil</h2>
    <form onSubmit={(event)=>{event.preventDefault();
    addTodo(event.target.todo.value);
    event.target.todo.value="";}}>
    <div className='add'><input type="text" name="todo" placeholder="Add new to do item"/>
    
    <button className='addbtn' type="submit">Add</button></div>
    </form>
    <ul>
      
      {todoitems.map((todo,index)=>(
        <li
        className='to-do-style' key={index}>{todo}<button class='btnsubmit' onClick={()=>removeTodo(index)}>Remove</button></li>
      ))}
    
    </ul>
    
   
  </div>
);
    }

export default Main;

