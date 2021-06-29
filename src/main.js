/**@type {import { "../typings/phaser" } } */

import { gameScene } from "./Scenes/gameScene";
import { introScene } from "./Scenes/introScene";
import { menuScene } from "./Scenes/menuScene";

let game = new Phaser.Game({
    width: 800,
    height:600,

    scene:[introScene,menuScene,gameScene]
});