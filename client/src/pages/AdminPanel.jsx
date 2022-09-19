import {React} from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import SideBar from "../components/SideBar/SideBar";
=======
import Sidebar from "../components/Sidebar";
import "../styles/AdminPanel.css"
>>>>>>> 98ce514 ( Changes to be committed:)
=======
import Sidebar from "../components/Sidebar";
import "../styles/AdminPanel.css"
>>>>>>> 98ce5144b350ee27b4d063c261a93f2231a4025b

const AdminPanel = () => {

    return (
<<<<<<< HEAD
<<<<<<< HEAD
        <div>
            <SideBar>
                fgdfg
            </SideBar>
=======
        <div className="adminPanel">
            <Sidebar className = 'Sidebar'/>
            <div className="pageAdminPanel">adsfsdf</div>
>>>>>>> 98ce514 ( Changes to be committed:)
=======
        <div className="adminPanel">
            <Sidebar className = 'Sidebar'/>
            <div className="pageAdminPanel">adsfsdf</div>
>>>>>>> 98ce5144b350ee27b4d063c261a93f2231a4025b
        </div>
    )
}

export default AdminPanel;