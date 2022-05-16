import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Map from './pages/map';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">GDSE Culture Map</Navbar.Brand>
          <Nav >
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="/map">Map</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/map' element={<Map />} />
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
