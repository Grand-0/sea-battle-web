import React from "react";
import { ThreeComponentsModule } from "three-components-module";
import "./menu-view.scss";

import { SeaComponentsModule } from "sea-components-module";

//TODO: мб данный импорт требует шортката???
export function MenuView() {
    const modelUrl = "/temp.glb";
    const enviromentFile = "/sky.jpg";
    return (
        <div className="menuContainer">
            <div className="menuContainer_preViewBattleShip">
                <ThreeComponentsModule.Scene modelUrl={modelUrl} />
            </div>
            <SeaComponentsModule.Menu>
                <SeaComponentsModule.MenuComponents.Header>
                    <SeaComponentsModule.MenuComponents.HeaderItem text="Морской бой" />
                </SeaComponentsModule.MenuComponents.Header>
                <SeaComponentsModule.MenuComponents.Body>
                    <SeaComponentsModule.MenuComponents.BodyItem text="Бой с компьютером" />
                    <SeaComponentsModule.MenuComponents.BodyItem text="Бой с игроком" />
                    <SeaComponentsModule.MenuComponents.BodyItem text="Мои друзья" />
                    <SeaComponentsModule.MenuComponents.BodyItem text="Мой набор" />
                    <SeaComponentsModule.MenuComponents.BodyItem text="Магазин" />
                    <SeaComponentsModule.MenuComponents.BodyItem text="Правила" />
                    <SeaComponentsModule.MenuComponents.BodyItem text="Настройки" />
                    <SeaComponentsModule.MenuComponents.BodyItem text="Выйти" />
                </SeaComponentsModule.MenuComponents.Body>
            </SeaComponentsModule.Menu>
        </div>
    );
}
