import { BattleShipType, IBattleShip, Position } from "./ship-base";

export class Cruiser implements IBattleShip {
    positions: Position[];
    shipSize: number;
    shipTypeName: BattleShipType;

    constructor() {
        this.shipSize = 3;
        this.shipTypeName = "Cruiser";
    }

    public setPosition (positions: Position[]) {
        this.positions = positions;
    }
}