import React, { useState } from "react";
import { Board } from "../../board/board";
import { BoardCompanent } from "../board/BoardComponent";
import { ShipSelectPanel } from "../ship-select-panel/ShipSelectPanel";
import { IBattleShip } from "../../entities/ship-base";
import { getBasicShips } from "../../helpers/ships-initializer";

import "./GameView.scss";

export function GameView() {
    const [leftBoard, setLeftBoard] = useState<Board>(new Board());
    const [ships, setShips] = useState<IBattleShip[]>(getBasicShips());

    return (
        <div className="setupContainer">
            <ShipSelectPanel ships={ships} />
            <BoardCompanent board={leftBoard} />
        </div>
    );
}
