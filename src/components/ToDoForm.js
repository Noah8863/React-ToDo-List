import React, { useState } from "react";

function ToDoForm({ addTask, handleFilter }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <form style={{ margin: 20 }}>
        <input
          className="inputfield"
          value={userInput}
          onChange={handleChange}
          id="name"
          type="text"
          placeholder="Enter task..."
        />
      <button id="newEventBtn" className="learn-more" onClick={handleSubmit}>
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Add New Event</span>
      </button>
    </form>
  );
}

export default ToDoForm;
