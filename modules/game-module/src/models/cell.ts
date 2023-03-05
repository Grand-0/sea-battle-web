export class Cell {
    public positionX: number;
    public positionY: number;
    public hasShot: boolean;
    public code: number;

    constructor(positionX: number, positionY: number) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.hasShot = false;
    }

    public InscribeShip (shipCode: number) {
        this.code = shipCode;
    }

    public SetShot () {
        if (this.hasShot) {
            throw Error("Эта цель уже была обстреляна!");
        }
        
        this.hasShot = true;
    }
}