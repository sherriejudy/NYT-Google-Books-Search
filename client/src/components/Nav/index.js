import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class ClickyNavBar extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Google Books</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Search</Nav.Link>
          <Nav.Link href="#pricing">Saved </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default ClickyNavBar;
