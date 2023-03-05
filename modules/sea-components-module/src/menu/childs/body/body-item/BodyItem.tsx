import React from "react";
import "./BodyItem.scss";

type BodyItemProps = {
    icon?: JSX.Element;
    text: string;
    onClick?: () => void;
};

export function BodyItem({ icon, text, onClick }: BodyItemProps) {
    return (
        <div
            tabIndex={0}
            className="menuContainer_menuBar_bodyContainer_bodyItem"
            onClick={onClick}
        >
            {icon}
            <h4>{text}</h4>
        </div>
    );
}
