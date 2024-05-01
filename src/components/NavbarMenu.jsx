import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import AuthUtils from "../utils/AuthUtils";
import ApiUtils from "../utils/ApiUtils";
import SearchBar from "../components/Searchbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

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
            <Navbar.Brand>
              <Link to="/home">Modest Outfits</Link>
            </Navbar.Brand>
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
                      <Nav.Link>
                        <Link onClick={this.handleClick}>Log Out</Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link>Contact Us</Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link to="/orders">Orders</Link>
                      </Nav.Link>
                    </NavDropdown>
                  </Col>
                  <Col>
                    <Nav.Item className="ms-auto">
                      <Nav.Link>
                        <Link to="/cart">
                          <i className="bi bi-cart3"></i>
                          &nbsp;
                          {this.numberOfItemsInCart} Items
                        </Link>
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                </Row>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavbarMenu;
