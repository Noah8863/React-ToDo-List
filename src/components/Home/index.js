import React from "react";
import "./style.scss";

function Home(){
    return (
        <div id="mainContainer">
            <header>
                <h1 style={{padding: 20}}>ToDo List</h1>
                <input type="text" placeholder="New Event Here..." />
                <button >Add Event</button>
            </header>
            <div className="newEventContainer">
                Hello
            </div>
        </div>
    )
}

export default Home;