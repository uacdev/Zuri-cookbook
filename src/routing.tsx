import { type RouteObject } from "react-router"
import Layout from "./pages/layout";
import LandingPage from "./pages";
import Recipe from "./pages/recipe";
import RecipePage from "./pages/recipe-page";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <LandingPage /> },
            { path: "recipes", element: <Recipe /> },
            { path: "recipe/:id", element: <RecipePage /> },

        ]
    },
];

export default routes