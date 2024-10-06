import React,{useState} from 'react'; 
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoWrapper = () => {
  
  const [task,setTask] = useState([]);
  const addTask = (newTask) => {
    let ids= Math.floor(Math.random() * 100) + 1;
    setTask([...task, {id:ids, task:newTask,completed:false,isEditing:false}]);
    console.log(ids)
  }
  const removeTask = (newTask) => {
    console.log('from wrapper', newTask);
    setTask(task.filter((item,i) => i!== newTask));
  }

  const toggleComplete = (id) => {
    setTask(task.map((todo) => todo.id === id ? {...todo, completed:true} : todo
    ));
    console.log("clicked")
    console.log(id)
  }

  return (
    <div className='todoWrapper'> 
      <TodoForm addTask={addTask}/>
      <Todo task={task} removeTask={removeTask} toggleComplete={toggleComplete}/>
    </div>
  )
}

export default TodoWrapper
