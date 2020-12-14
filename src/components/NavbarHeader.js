import React from 'react';
import { NavLink } from 'react-router-dom';
const { Navbar, Nav } = require("react-bootstrap");

const NavbarHeader = () => {
    return (
        <Navbar bg="secondary">
            <Nav>
                <NavLink to="/">
                    <Navbar.Brand >
                        <i
                            className="d-inline-block align-top fas fa-battery-full fa-lg"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </NavLink>
                <NavLink style={{ color: "lightgray" }}
                    to="about">
                    About
                </NavLink>
            </Nav>
        </Navbar >
    );
}

export default NavbarHeader;