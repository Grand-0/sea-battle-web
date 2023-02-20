import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthView } from "./views/auth-view/auth-view";
import { ErrorRouteView } from "./views/error-route-view/error-route-view";
import { MenuView } from "./views/menu-view/menu-view";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthView />,
        errorElement: <ErrorRouteView />,
        children: [],
    },
    {
        path: "/menu",
        element: <MenuView />,
    },
]);

export function App() {
    return <RouterProvider router={router} />;
}
