import { Container, Col, Row, Nav } from 'react-bootstrap';

import './App.css';
import  Routes  from './components/Routes';


function App() {
  return (
    <div>
      <header>
        <Nav defaultActiveKey="/home" >
          <Nav.Item >
            <Nav.Link href="/">Homepage</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link href="/bio" eventKey="Bio-link">Bio</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link href="/my-work" eventKey="My-Work-link">My work</Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
      <body className="container">
        <Routes />
      </body>
    </div>
  );
}

export default App;
