import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

export default function Navbarr() {
  const navigate = useNavigate();
  const { userDetails, setUserDetails } = useContext(UserContext);
  const handleSignOut = (e) => {
    setUserDetails({
      name: "",
      class: "",
      div: "",
      roll_no: null,
      email: "",
      prn: "",
      frontSide: "",
      leftSide: "",
      rightSide: "",
    });
    navigate("/login");
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            {userDetails.email && (
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
            )}

            {!userDetails.email && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Log In
                </Link>
              </li>
            )}
            {userDetails.email && (
              <li className="nav-item" onClick={handleSignOut}>
                <Link className="nav-link" to="/">
                  Log Out
                </Link>
              </li>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
