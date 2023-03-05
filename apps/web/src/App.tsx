import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthView } from "./views/auth-view/AuthView";
import { ErrorRouteView } from "./views/error-route-view/ErrorRouteView";
import { MenuView } from "./views/menu-view/MenuView";
import { GameView } from "sea-game-module";

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
    {
        path: "/game",
        element: <GameView />,
    },
]);

export function App() {
    return <RouterProvider router={router} />;
}
