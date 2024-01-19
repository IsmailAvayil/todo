
import React,{ useContext } from "react";
import "./TodoApp.css";
import { AppContext } from "../../ReactContext/AppContext";

function TodoApp() {
  const {handleChangeDetails,handleChangeTitle,userForm,userData,handleSubmit,setUserData} =useContext(AppContext)
  const deleteItem=(item)=>{
    const d=userData.filter((obj,index)=>
      index !== item
    )
    setUserData(d)

  }
  return (
    <div className="todo-container">
      
      <form className="user-input" onSubmit={handleSubmit} >
      <h1>TodoApp</h1>
        <div>
          <input type="text" placeholder="Enter the title" onChange={handleChangeTitle} name="title" value={userForm.title}></input>
        
        </div>
        <div>
          <textarea type="text" placeholder="Enter the Detials" onChange={handleChangeDetails} name="details" value={userForm.details}></textarea>
        
        </div>

        <button type="submit" >Add</button>
      </form>
      {userData && userData.map((obj,index)=>(
        <ul>
          <li>
            <div>
            <h3>{obj.title}</h3><i className="fa-solid fa-trash" onClick={()=>deleteItem(index)}></i>

           
          <i class="fa-solid fa-check"></i>
          </div>
          <p>{obj.details}</p>
          
          </li>
          
          
        
        </ul>
  

      ))}

      
    </div>
  );
}

export default TodoApp;
