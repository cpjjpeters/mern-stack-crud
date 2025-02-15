//App.js
// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Import other React Component
import CreateStudent from "./Components/create-student.component";
import EditStudent from "./Components/edit-student.component";
import StudentList from "./Components/student-list.component";

// App Component
const App = () => {
  return (
    <Router>
      <div>
        <h2>React MERN Stack App</h2>
      </div>

      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-student"} className="nav-link">
                  React MERN Stack App
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-student"} className="nav-link">
                    Create Student
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/student-list"} className="nav-link">
                    Student List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        {/* <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            // Add more routes here
          </Routes>
        </Container> */}
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" component={CreateStudent} />
                  <Route path="/create-student" component={CreateStudent} />
                  <Route path="/edit-student/:id" component={EditStudent} />
                  <Route path="/student-list" component={StudentList} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
