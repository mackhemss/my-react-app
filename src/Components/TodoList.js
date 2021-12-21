import react from "react";
import Todo from "./Todo"
const ToDoList = ({todos,setTodos,filteredtodos}) =>{
return (
   
    <div className="todo-container">
    <ul className="todo-list">
        { 
       
       filteredtodos.map((todo)=> (
                <Todo todo={todo} setTodos={setTodos} todos={todos} text={todo.text} />
            )
               
            )
        }
   
    </ul>
    
  </div>
)
}

export default ToDoList;