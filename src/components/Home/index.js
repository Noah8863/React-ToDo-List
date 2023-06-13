import React, {useState} from "react";
import data from '../../data.json';
import "./style.scss";

function Home(){
    const input = document.getElementById("inputField");
    const [value, newValue] = useState("");

    const [toDoList, setToDoList] = useState(data);

    function submitNewEvent(){
        const value1 = input.value;
        newValue(console.log(value1));
    }
    return (
        <div id="mainContainer">
            <header>
                <h1 style={{padding: 20}}>ToDo List</h1>
                <input type="text" id="inputField" placeholder="New Event Here..." />
                <button onClick={submitNewEvent}>Add Event</button>
            </header>
            <div className="newEventContainer">
                This is where the new event would go: {value}
            </div>
        </div>
    )
}

export default Home;