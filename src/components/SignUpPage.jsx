import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AuthUtils from '../utils/AuthUtils';
import { useNavigate } from "react-router-dom";


class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }
    const status = AuthUtils.signUp(user);
    if (status === "Success") {
      useNavigate("/");
    } else {
      alert("Failed to sing up user: " + status);
    }
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Control placeholder="First name" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Control placeholder="Last name" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="newPassword">
          <Form.Control type="password" placeholder="New password" name="password" value={this.state.password} onChange={this.handleChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    );
  }
}

export default SignUpPage;
