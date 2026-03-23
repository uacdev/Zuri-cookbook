import { type RouteObject } from "react-router"
import Layout from "./pages/layout";
import LandingPage from "./pages";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <LandingPage /> },
        ]
    },
];

export default routes