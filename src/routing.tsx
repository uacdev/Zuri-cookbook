import { type RouteObject } from "react-router"
import Layout from "./pages/layout";
import LandingPage from "./pages";
import Recipes from "./pages/recipe";
import RecipeDetails from "./pages/recipe-details";
import NotFound from "./pages/not-found";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <LandingPage /> },
            { path: "recipes", element: <Recipes /> },
            { path: "recipe/:id", element: <RecipeDetails /> },
            { path: "*", element: <NotFound /> },
        ]
    },
];

export default routes