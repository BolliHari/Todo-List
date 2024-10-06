import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Todo = ({task,removeTask,toggleComplete}) => {
  
  return (
    <div>
      {task.map((todo,i) =>{
        return (
          <li key={i} className='task'>
            <p onClick={() => toggleComplete(todo.id)} className={`${todo.completed} ? 'completed' : ""`} >{todo.task}</p>
            <div className='btns'>
              <button onClick={()=>removeTask(i)} className='delete-btn'><FontAwesomeIcon className='delete-logo' icon={faTrash}/></button>
            </div>
          </li>
        )
      })}
    </div>
  )
}

export default Todo
