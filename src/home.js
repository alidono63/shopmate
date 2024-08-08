import { useState } from "react";
let task = {}
    const Home   = () =>{
const [taskValue , setTaskValue] = useState("")
const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(event.target.task.value)
    }
    const handlechange = (event) =>{
        setTaskValue(event.target.value);
        
      
    }
    setTaskList = ([ ...tasks , newTask])

return (
    <div className='hello'>
         <button type="submit" >add task</button>
                 <form onSubmit={handleSubmit}>
                 <p className="heythere">{taskValue}</p> 
                 <section className="tasks">
           
           <input type="text" name="task"  className="input" placeholder="add tasks here!"></input>
         </section>
         
                    </form>
        {tasks.map((task) =>(
            <div className='blogpreview' key  = {tasks.id}>
                <h2>{tasks.name}</h2>
               
               
                 
           
   
   
                 </div>
        ))}
</div>
)}
export default Home;