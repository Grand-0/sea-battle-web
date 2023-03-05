import { BattleShipType, IBattleShip, Position } from "./ship-base";

export class Destroyer implements IBattleShip {
    positions: Position[];
    shipSize: number;
    shipTypeName: BattleShipType;

    constructor() {
        this.shipSize = 2;
        this.shipTypeName = "Destroyer";
    }

    public setPosition (positions: Position[]) {
        this.positions = positions;
    }
}