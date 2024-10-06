import React,{useState} from 'react';


const TodoForm = ({addTask}) => {
  const [newTask,setNewTask] = useState("");
  const submitHandler = (e) =>{
    e.preventDefault();
    addTask(newTask);
  }
  return (
    <div onSubmit={submitHandler}>
      <form>
        <input type='text' placeholder='Todo' value={newTask} className='todo-list' onChange={(e)=>{setNewTask(e.target.value)}}/>
        <button type='submit' className='todo-btn'>Add Todo</button>
      </form>
    </div>
  )
}

export default TodoForm
