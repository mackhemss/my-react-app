import react from "react";

const Form = ({inputText,setInputText,todos,setTodos,setStatus,errorMessage,setErrorMessage}) =>{
  
    const inputTextHandler = (e)=>{
       
        if(e === "inputText"){
          setErrorMessage('Please Enter Something!'); 
          setInputText(e.target.value);
          console.log(e);
        }
        else{
          setErrorMessage("");
        }
        setInputText(e.target.value)
    };
    const submitTodoHandler = (e)=>{
        e.preventDefault();
        if(inputText.trim()===""){
          setErrorMessage('Please Enter Something!');
          //alert("Please Enter Something");
        }
        else{
        setTodos([
            ...todos,{text:inputText,completed:false,id:Math.random()}
        ])
        console.log(todos)
        setInputText="";
      }
    };
    const StatusHandler = (e)=>{
        setStatus(e.target.value)
    };
    
   
return (
    <form>
     
    
    <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
   
    <button onClick={submitTodoHandler} className="todo-button" type="submit">
      <i className="fas fa-plus-square"></i>
    </button>
    <div className="select">
      <select onChange={StatusHandler} name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incompleted">incompleted</option>
      </select>
    </div><br />
   {errorMessage && (
  <p className="error"> {errorMessage} </p>
)}
  </form>
)
}

export default Form;