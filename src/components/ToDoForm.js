import React, { useState } from "react";

function ToDoForm({ addTask }) {
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
        value={userInput}
        type="text"
        onChange={handleChange}
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
