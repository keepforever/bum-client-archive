import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

function handleEventKey(selectedKey) {
  console.log(`selected ${selectedKey}`);
}


export default () => {
  return <Navbar inverse collapseOnSelect className="square-corners">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Bumcheeks</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav onSelect={handleEventKey}>
          <NavItem eventKey={1} componentClass={Link} href="/" to="/">
            Home
          </NavItem>
          <NavItem eventKey={2} componentClass={Link} href="/decks" to="/decks">
            Decks
          </NavItem>
        <NavItem eventKey={3} componentClass={Link} href="/login" to="login">
          Login
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={4} to="/add" componentClass={Link} href="/add">
            Add
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;
};
