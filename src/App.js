import React, { useState } from "react";
import NavBar from "./components/Navbar/navbar.js";
import ToDo from "../src/components/ToDo.js";
import data from "../src/data.json";
import ToDoList from "../src/components/ToDoList.js";
import "./main.scss";


function App() {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id == id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };
  return (
    <>
      <NavBar />
      <div id="mainContainer">
        <header>
          <h1 style={{ padding: 20 }}>ToDo List</h1>
          <input type="text" id="inputField" placeholder="New Event Here..." />
          <button>Add Event</button>
        </header>
        <div className="newEventContainer">
          <ToDoList toDoList={toDoList} />
        </div>
      </div>
    </>
  );
}

export default App;
