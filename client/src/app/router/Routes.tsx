import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import CampsiteDashboard from "../../features/campsites/dashboard/CampsiteDashboard";
import CampsiteForm from "../../features/campsites/form/CampsiteForm";
import CampsiteDetails from "../../features/campsites/details/CampsiteDetail";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'campsites', element: <CampsiteDashboard /> },
            { path: 'campsites/:id', element: <CampsiteDetails /> },
            { path: 'createCampsite', element: <CampsiteForm /> },
        ]
    }
])