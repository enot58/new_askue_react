import {React, useState} from 'react';
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import classes from "./SideBarItem.module.css"
import {ListGroupItem} from "react-bootstrap";


function SideBarItem(props) {

  // const [newActive, setNewActive] = useState(false)

  // const selectActive = () => {
      
  //     console.log(newActive)
      
  //     if (newActive === false ) {
  //       setNewActive(true)
  //     } else {
  //       setNewActive(false)
  //     }

  // }

  return (

       <ListGroupItem onClick={props.setNewActive} active={props.newActive}>
          <Link className={classes.newSideBarItem} to={props.newLink}>
            {props.children}
          </Link>
       </ListGroupItem> 

  )
}

export default SideBarItem