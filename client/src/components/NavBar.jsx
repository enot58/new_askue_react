import React from 'react';
import {Container ,Navbar, Nav} from "react-bootstrap"
import {Link, Routes} from "react-router-dom";
const NavBar = () => {
    return (


                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand><Link to="/main">Main</Link></Navbar.Brand>
                        <Nav className="me-auto">
                            <Link to="/main">Main</Link>

                            {/*<Nav.Link><Link to="/main">Main</Link></Nav.Link>
                            <Nav.Link><Link to="/configured">Configured</Link></Nav.Link>*/}
                            <Nav.Item><Link to="/configured">Configured</Link></Nav.Item>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>



    );
};

export default NavBar;