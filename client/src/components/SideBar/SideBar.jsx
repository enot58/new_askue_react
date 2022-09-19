import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import classes from "./SideBar.module.css"
import NavItem from "../UI/navItem/NavItem"

function SideBar(props) {
  return (
    // <div className= {classes.newSideBar}>
    //     {props.children}
    // </div>

    

    <ListGroup className= {classes.newSideBar}>
        {props.children}
    </ListGroup>
  )
}

export default SideBar;