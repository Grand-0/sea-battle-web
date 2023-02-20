import React from "react";
import { ThreeComponentsModule } from "three-components-module";
import "./menu-view.scss";

export function MenuView() {
    const modelUrl = "/temp.glb";
    return (
        <div className="menuContainer">
            <div className="menuContainer_preViewBattleShip">
                <ThreeComponentsModule.Scene modelUrl={modelUrl} />
            </div>
            <div className="menuContainer_menuBar"></div>
        </div>
    );
}
