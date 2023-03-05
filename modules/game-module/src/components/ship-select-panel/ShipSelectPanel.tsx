import React from "react";
import { IBattleShip } from "../../entities/ship-base";
import { Ship } from "../ship/Ship";
import "./ShipSelectPanel.scss";

type ShipSelectPanelProps = {
    ships: IBattleShip[];
};

export function ShipSelectPanel({ ships }: ShipSelectPanelProps) {
    return (
        <div className="setupContainer_selectPanel">
            {ships.map((s) => {
                return <Ship shipTypeName={s.shipTypeName} />;
            })}
        </div>
    );
}
