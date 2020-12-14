import React from 'react';
const { Navbar, Nav } = require("react-bootstrap");

const NavbarHeader = () => {
    return (
        <Navbar bg="secondary">
            <Navbar.Brand href="/">
                <i
                    className="d-inline-block align-top fas fa-battery-full fa-lg"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Nav >
                <Nav.Link style={{ color: "lightgray" }} href="/about">About</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavbarHeader;