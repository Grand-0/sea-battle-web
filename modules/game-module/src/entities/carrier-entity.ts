import { BattleShipType, IBattleShip, Position } from "./ship-base";

export class Carrier implements IBattleShip {
    positions: Position[];
    shipSize: number;
    shipTypeName: BattleShipType;

    constructor() {
        this.shipSize = 4;
        this.shipTypeName = "Carrier";
    }

    public setPosition (positions: Position[]) {
        this.positions = positions;
    }
}