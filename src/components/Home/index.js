import React, {useState} from "react";
import "./style.scss";

function Home(){
    const input = document.getElementById("inputField");
    const [value, newValue] = useState("");

    function submitNewEvent(){
        newValue(console.log(input.value));
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