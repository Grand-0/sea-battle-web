export type Position = {
    x: number;
    y: number;
}

export type BattleShipType = "PatrolBoat" | "Destroyer" | "Cruiser" | "Carrier";

export interface IBattleShip {
    positions: Position[];
    shipSize: number;
    shipTypeName: BattleShipType;

    setPosition(positions: Position[]): void;
}