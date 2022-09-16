import {
    MAIN_ROUTE,
    CONFIGURED_ROUTE,
    ADMIN_ROUTE
} from "./utils/consts";


import Main from "./pages/Main.jsx";
import Configured from "./pages/Configured.jsx";
import AdminPanel from "./pages/AdminPanel";


export const publickRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: CONFIGURED_ROUTE,
        Component: Configured
    },
    {
        path: ADMIN_ROUTE,
        Component: AdminPanel
    },
]




export const adminPanelRoutes = [
    
]