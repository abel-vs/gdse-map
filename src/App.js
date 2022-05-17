import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Map from './pages/map';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path={process.env.PUBLIC_URL + '/'} element={<Map />} />
        <Route exact path={process.env.PUBLIC_URL + '/about'} element={<About />} />
        <Route exact path={process.env.PUBLIC_URL + '/map'} element={<Home/>} />
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
