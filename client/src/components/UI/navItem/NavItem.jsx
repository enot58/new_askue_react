import React from 'react';
import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";
import classes from "./NavItem.module.css"
const NavItem = (props) => {
    return (
        <Nav.Item><Link className={classes.myNavItem} to={props.newLink}>{props.children}</Link></Nav.Item>
    );
};

export default NavItem;