import React from "react";
import "./Menu.scss";

type MenuProps = {
    children: JSX.Element[];
};

export function Menu({ children }: MenuProps) {
    return <div className="menuContainer_menuBar">{children}</div>;
}
