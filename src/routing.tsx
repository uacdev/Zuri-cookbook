import { type RouteObject } from "react-router"
import Layout from "./pages/layout";
import LandingPage from "./pages";
import Recipes from "./pages/recipes";
import RecipeDetails from "./pages/recipe-details";
import Products from "./pages/products";
import About from "./pages/about";
import NotFound from "./pages/not-found";
import Contact from "./pages/contact";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <LandingPage /> },
            { path: "recipes", element: <Recipes /> },
            { path: "recipe/:id", element: <RecipeDetails /> },
            { path: "products", element: <Products /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },
            { path: "*", element: <NotFound /> },
        ]
    },
];

export default routes;