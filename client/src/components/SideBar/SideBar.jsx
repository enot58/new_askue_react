import React from 'react'
import classes from "./SideBar.module.css"

function SideBar(props) {
  return (
    <div className= {classes.newSideBar}>
        {props.children}
    </div>
  )
}

export default SideBar;