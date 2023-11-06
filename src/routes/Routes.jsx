import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Home from "../pages/home";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "home",
        element: <Home />
    }
    
]);

export default Routes;