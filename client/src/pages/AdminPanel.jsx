import {React, useState} from "react";
import SideBar from "../components/SideBar/SideBar";

import { ListGroupItem } from "react-bootstrap";
import SideBarItem from "../components/SideBar/SideBarItem";


const AdminPanel = () => {

    const [itemAdminPanel, setItemAdminPanel] = useState([
        {
            id: 1,
            newLink: '/admin',
            title: "Админ 1",
        },
        {
            id: 2,
            newLink: '/admin',
            title: "Админ 2",
        },
        {
            id: 3,
            newLink: '/admin',
            title: "Админ 3",
        }
    ])

    const [newActive, setNewActive] = useState(false)



    const onSelectActive = (id, active) => {
        

        const newItem = itemAdminPanel.map((itemAdmin) => 
            itemAdmin.id === id ? {...itemAdmin, active} : itemAdmin
        )
        setItemAdminPanel(newItem)
        console.log(newItem)
        console.log(itemAdminPanel)
         
    }

    return (
        <div>
            <SideBar>
                               
                {itemAdminPanel.map((item) => (
                    <SideBarItem key={item.id} {...item} onActiveClick = {active => onSelectActive()} newLink = {item.newLink} active={item.title}>
                        {item.title}
                    </SideBarItem>
                ))}

                
            </SideBar>
        </div>
    )
}

export default AdminPanel;