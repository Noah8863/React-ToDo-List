import React, {useState} from "react";
import data from '../../data.json';
import ToDo from "../ToDo.js";
import ToDoList from "../ToDoList.js";
import "./style.scss";

function Home(){
    const [toDoList, setToDoList] = useState(data);
    
    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
          return task.id == id ? { ...task, complete: !task.complete } : { ...task};
        });
        setToDoList(mapped);
      }
   
    return (
        <div id="mainContainer">
            <header>
                <h1 style={{padding: 20}}>ToDo List</h1>
                <input type="text" id="inputField" placeholder="New Event Here..." />
                <button>Add Event</button>
            </header>
            <div className="newEventContainer">
                <ToDoList toDoList={toDoList}/>
            </div>
        </div>
    )
}

export default Home;