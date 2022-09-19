import {React, useState} from "react";
import SideBar from "../components/SideBar/SideBar";

import { ListGroupItem } from "react-bootstrap";
import SideBarItem from "../components/SideBar/SideBarItem";


const AdminPanel = () => {

    const [newActive, setNewActive] = useState(false)

    const selectActive = () => {
        
        console.log(newActive)
        
        if (newActive === false ) {
          setNewActive(true)
        } else {
          setNewActive(false)
        }
  
    }

    return (
        <div>
            <SideBar>
                {/* <ListGroup.Item><NavItem newLink = {"/main"}>Главная</NavItem></ListGroup.Item>
                <ListGroup.Item>dsafdsf</ListGroup.Item>
                <ListGroup.Item>dsafdsf</ListGroup.Item>
                <ListGroup.Item>dsafdsf</ListGroup.Item> */}
                <SideBarItem newActive setNewActive newLink = {'/admin'}>
                    sadfdsffdgdgf
                </SideBarItem>

                <SideBarItem newLink = {'/admin'}>
                    sadfdsffdgdgf
                </SideBarItem>
                <SideBarItem newLink = {'/admin'}>
                    sadfdsffdgdgf
                </SideBarItem>
               
                

                
            </SideBar>
        </div>
    )
}

export default AdminPanel;