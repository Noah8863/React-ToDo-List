import React, {useState} from 'react';
import './main.scss';

function App() {
  var [count,setCount] = useState(0);

  function getCount() {
    setCount(count + 1)
  }
  function decreaseCount() {
    setCount(count - 1)
  }
  return (
    <div className="App">
      <button onClick={getCount}>Click Me for Increase!</button>
      <button onClick={decreaseCount}>Click Me for Decrease!</button>
      <p id="count">Count is: {count}</p>
    </div>
  );
}

export default App;
