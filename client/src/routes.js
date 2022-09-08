import {
    MAIN_ROUTE,
    CONFIGURED_ROUTE
} from "./utils/consts";


import Main from "./pages/Main.jsx";
import Configured from "./pages/Configured.jsx";


export const publickRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: CONFIGURED_ROUTE,
        Component: Configured
    },
]