import TaskList from './component/taskList';
import Navbar from './navBar';
import Home from './home';
import './App.css';
import { useState } from 'react';


function App() {
  const [taskList , setTaskList ] = useState([]);
  return (
    
    <div className="App">
      <div className='navbar'>
      <Navbar/>
     
        <button className=" button"> add</button>
      </div>
      <Home/>
    
      </div>
    
  );
}

export default App;
