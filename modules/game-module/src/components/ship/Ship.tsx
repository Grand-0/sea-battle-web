import React from "react";
import "./Ship.scss";

type ShipProps = {
    shipTypeName: string;
};

export function Ship({ shipTypeName }: ShipProps) {
    return <div draggable className={shipTypeName}></div>;
}
