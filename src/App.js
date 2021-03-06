import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages';
import Collaboration from './pages/collaboration';
import Map from './pages/map';
import Ref from './pages/ref';
import Hofstede from './pages/hofstede';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router basename="/gdse-map">
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/collaboration' element={<Collaboration />} />
        <Route exact path='/map' element={<Map/>} />
        <Route exact path='/references' element={<Ref/>} />
        <Route exact path='/hofstede' element={<Hofstede/>} />
      </Routes>
    </Router>
  );
}

export default App;
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
