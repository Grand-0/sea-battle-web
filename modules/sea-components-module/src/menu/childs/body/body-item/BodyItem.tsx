import React from "react";
import "./BodyItem.scss";

type BodyItemProps = {
    icon?: JSX.Element;
    text: string;
};

export function BodyItem({ icon, text }: BodyItemProps) {
    return (
        <div
            tabIndex={0}
            className="menuContainer_menuBar_bodyContainer_bodyItem"
        >
            {icon}
            <h4>{text}</h4>
        </div>
    );
}
