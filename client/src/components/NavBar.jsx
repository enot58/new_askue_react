import React from 'react';
import {Container ,Navbar, Nav} from "react-bootstrap"
import {Link, Routes} from "react-router-dom";
import NavItem from "./UI/navItem/NavItem";

const NavBar = () => {
    return (


                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand><Link to="/main">Logo</Link></Navbar.Brand>
                        <Nav className="me-auto">
                            <NavItem newLink = {"/main"}>Главная</NavItem>
                            <NavItem newLink = {"/admin"}>Админ панель</NavItem>
                            <NavItem newLink = {"/chat"}>Чат</NavItem>
                            <NavItem newLink = {"/disk"}>Диск</NavItem>
                            {/* <Link to="/main">Main</Link> */}
                        </Nav>
                    </Container>
                </Navbar>



    );
};

export default NavBar;