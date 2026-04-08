import React, { Suspense } from "react";
import { type RouteObject } from "react-router"
import { Loading } from "./components/common/loading";
import Layout from "./pages/layout";

const LandingPage = React.lazy(() => import("./pages/index"));
const Recipes = React.lazy(() => import("./pages/recipes"));
const RecipeDetails = React.lazy(() => import("./pages/recipe-details"));
const Products = React.lazy(() => import("./pages/products"));
const About = React.lazy(() => import("./pages/about"));
const NotFound = React.lazy(() => import("./pages/not-found"));
const Contact = React.lazy(() => import("./pages/contact"));

const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
    <Suspense 
        fallback={
            <div className="w-full flex-1 flex items-center justify-center min-h-[60vh]">
                <Loading />
            </div>
        }
    >
        {children}
    </Suspense>
);

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <SuspenseWrapper><LandingPage /></SuspenseWrapper> },
            { path: "recipes", element: <SuspenseWrapper><Recipes /></SuspenseWrapper> },
            { path: "recipe/:id", element: <SuspenseWrapper><RecipeDetails /></SuspenseWrapper> },
            { path: "products", element: <SuspenseWrapper><Products /></SuspenseWrapper> },
            { path: "about", element: <SuspenseWrapper><About /></SuspenseWrapper> },
            { path: "contact", element: <SuspenseWrapper><Contact /></SuspenseWrapper> },
            { path: "*", element: <SuspenseWrapper><NotFound /></SuspenseWrapper> },
        ]
    },
];

export default routes;