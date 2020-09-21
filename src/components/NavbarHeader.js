import React from 'react';
const { Navbar } = require("react-bootstrap");

const NavbarHeader = () => {
    return (
        <Navbar bg="secondary">
            <Navbar.Brand href="/II-frontend">
                <i
                    className="d-inline-block align-top fas fa-battery-full fa-lg"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
        </Navbar>
    );
}

export default NavbarHeader;