import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Books extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
              <h3>Search for and Save Books of Interest</h3>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Card>
            <Card.Body>
              <Card.Title>Book</Card.Title>
              <Form.Control type="email" placeholder="Book Search" />
              <Button variant="primary">Submit</Button>
            </Card.Body>
          </Card>
        </Row>
        {this.state.books.map(data => (
          <p>Title: {data.title}</p>
        ))}
      </Container>
    );
  }
}

export default Books;
