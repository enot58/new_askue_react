import {React, useState} from 'react';
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import classes from "./SideBarItem.module.css"
import {ListGroupItem} from "react-bootstrap";


function SideBarItem({id, title, newLink, active, onActiveClick = f => f}) {

  return (

       <ListGroupItem onClick={() => onActiveClick(id)}>
          <Link className={classes.newSideBarItem} to={newLink}>
            {title}
          </Link>
       </ListGroupItem> 

  )
}

export default SideBarItem