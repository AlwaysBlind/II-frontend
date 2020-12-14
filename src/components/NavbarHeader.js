import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const { Navbar, Nav } = require("react-bootstrap");

const NavbarHeader = () => {
    return (
        <Navbar bg="secondary">
            <Navbar.Brand href="/II-frontend">
                <i
                    className="d-inline-block align-top fas fa-battery-full fa-lg"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Nav >
                <Link style={{ color: "lightgray" }} to="/II-frontend/about">About</Link>
            </Nav>
        </Navbar>
    );
}

export default NavbarHeader;