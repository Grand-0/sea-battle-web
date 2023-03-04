import React from "react";
import "./Header.scss";

type HeaderProps = {
    children: JSX.Element | JSX.Element[];
};

export function Header({ children }: HeaderProps) {
    return (
        <div className="menuContainer_menuBar_headerContainer">{children}</div>
    );
}
