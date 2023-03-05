import { BattleShipType, IBattleShip, Position } from "./ship-base";

export class PatrolBoat implements IBattleShip {
    positions: Position[];
    shipSize: number;
    shipTypeName: BattleShipType;

    constructor() {
        this.shipSize = 1;
        this.shipTypeName = "PatrolBoat";
    }

    public setPosition (positions: Position[]) {
        this.positions = positions;
    }
}