import React from "react";
import { Board } from "../../board/board";
import { CellComponent } from "../cell/CellComponent";
import "./Board.scss";

type BoardProps = {
    board: Board;
};

export function BoardCompanent({ board }: BoardProps) {
    return (
        <div className="gameField">
            {board.cells.map((row, index) => {
                return (
                    <React.Fragment key={index}>
                        {row.map((cell, index) => {
                            return <CellComponent />;
                        })}
                    </React.Fragment>
                );
            })}
        </div>
    );
}
