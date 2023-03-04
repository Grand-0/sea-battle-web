import React from "react";
import "./HeaderItem.scss";

type HeaderItemProps = {
    text: string;
};

export function HeaderItem({ text }: HeaderItemProps) {
    return (
        <div className="menuContainer_menuBar_headerContainer_headerItem">
            <h2 className="menuContainer_menuBar_headerContainer_headerItem_textContent">
                {text}
            </h2>
        </div>
    );
}
