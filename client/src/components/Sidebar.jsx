import React from 'react'
import "../styles/AdminPanel.css"
import { SideBarData } from './SideBarData'

function Sidebar() {
    return (
        <div className='Sidebar'>
            <ul className='SidebarList'>
                {SideBarData.map((val, key) => (
                    <li 
                        key={key}
                        id={window.location.pathname == val.link ? "active" : ""} 
                        className="rowList" 
                        onClick={() => {window.location.pathname = val.link}
                    }>
                        <div id="icon">{val.icon}</div>
                        <div id= "title">{val.title}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar