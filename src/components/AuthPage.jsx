import React from "react";
import HomePage from "./HomePage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AuthPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Row className="pt-5">
          <Col></Col>
          <Col>
            <Tabs
              defaultActiveKey="signIn"
              id="auth-tab"
              className="mb-3 justify-content-md-center"
            >
              <Tab eventKey="signIn" title="Sign In">
                <LoginPage />
              </Tab>
              <Tab eventKey="signUp" title="Sing Up">
                <SignUpPage />
              </Tab>
            </Tabs>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default AuthPage;
