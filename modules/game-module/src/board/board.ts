import { Cell } from "../models/cell";

export interface IGameBoard {
    owner: string;
    cells: Cell[][];
}

export class Board implements IGameBoard {
    owner: string;
    cells: Cell[][] = [];

    constructor() {
        this.InitCells();
    }

    public InitCells() {
        for (let i = 0; i < 10; i++) {
            const row: Cell[] = [];
            
            for (let j = 0; j < 10; j++) {
                row.push(new Cell(j, i));
            }

            this.cells.push(row);
        }
    }

    public InscribeShip(positionX: number, positionY: number, orientation: "x"| "y", shipCode: number) {

    }
}