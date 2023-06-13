import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/navbar.js';
import Home from './components/Home/index.js';
import './main.scss';<Home />

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/"
          element={<>
            <Home />
          </>
          }></Route>
      </Routes>
    </Router>
  );
}

export default App;
