import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import CampsiteDashboard from "../../features/campsites/dashboard/CampsiteDashboard";
import CampsiteForm from "../../features/campsites/form/CampsiteForm";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'campsites', element: <CampsiteDashboard /> },
            { path: 'createCampsite', element: <CampsiteForm /> },
        ]
    }
])