import React from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import AuthUtils from "../utils/AuthUtils";
import ApiUtils from "../utils/ApiUtils";
import SearchBar from "../components/Searchbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class NavbarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: AuthUtils.isUserSignedIn(),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    AuthUtils.logOut();
    this.setState({
      isSignedIn: AuthUtils.isUserSignedIn(),
    });
    window.location.reload();
  }

  numberOfItemsInCart = ApiUtils.getCartItems().length;

  render() {
    return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/home">Modest Outfits</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="w-100">
                <Row className="w-100 pt-3">
                  <Col xs="8">
                    <Nav.Item>
                      <SearchBar />
                    </Nav.Item>
                  </Col>
                  <Col>
                    <NavDropdown title="Account" className="ms-auto">
                      <Nav.Link onClick={this.handleClick}>Log Out</Nav.Link>
                      <Nav.Link>Contact Us</Nav.Link>
                      <Nav.Link href="/orders">Orders</Nav.Link>
                    </NavDropdown>
                  </Col>
                  <Col>
                    <Nav.Item className="ms-auto">
                      <Nav.Link href="/cart">
                        <i className="bi bi-cart3"></i>
                        &nbsp;
                        {this.numberOfItemsInCart} Items
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                </Row>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet />
      </>
    );
  }
}

export default NavbarMenu;
