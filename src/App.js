import React, { useState } from "react";
import data from "../src/data.json";
//components
import NavBar from "./components/Navbar/navbar.js";
import ToDoList from "../src/components/ToDoList.js";
import ToDoForm from "../src/components/ToDoForm.js";
//styles
import "./main.scss";


function App() {
  
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <>
      <NavBar />
      <div id="mainContainer">
        <header>
          <h1 style={{margin: 20}}>ToDo List</h1>
          <ToDoForm addTask={addTask}/>
          <div onClick={handleFilter} className="icon-delete"></div>
        </header>
        <div className="newEventContainer">
          <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
        </div>
      </div>
    </>
  );
}

export default App;
