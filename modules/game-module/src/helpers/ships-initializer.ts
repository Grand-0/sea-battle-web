import { Carrier } from "../entities/carrier-entity";
import { Cruiser } from "../entities/cruiser-entiry";
import { Destroyer } from "../entities/destroyer-entity";
import { PatrolBoat } from "../entities/patrol-boat-entity";
import { IBattleShip } from "../entities/ship-base"

export const getBasicShips = (): IBattleShip[] => {
    return [
        new Carrier(),
        new Cruiser(),
        new Cruiser(),
        new Destroyer(),
        new Destroyer(),
        new Destroyer(),
        new PatrolBoat(),
        new PatrolBoat(),
        new PatrolBoat(),
        new PatrolBoat(),
    ]
}