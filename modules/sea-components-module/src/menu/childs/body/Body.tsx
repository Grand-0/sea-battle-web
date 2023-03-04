import React from "react";
import "./Body.scss";

type BodyProps = {
    children: JSX.Element | JSX.Element[];
};

export function Body({ children }: BodyProps) {
    return (
        <div className="menuContainer_menuBar_bodyContainer">{children}</div>
    );
}
