import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {
  const[tasks,setTasks] = useState([
    {id:"1",text:"Meeting",day:"Friday",reminder:false},
    {id:"2",text:"Shopping",day:"Sunday",reminder:true},

  ])

  const deleteTask = (id) =>{
   setTasks(tasks.filter((task)=> task.id !== id)) 

  }
  const toggleTask = (id) =>{
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder:!task.reminder}:task))
  }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle = {toggleTask} /> : 'No Tasks to Show'}
      
    </div>
  );
}

export default App;