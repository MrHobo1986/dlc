import { CST } from "../CST"
export  class introScene extends Phaser.Scene
{
    constructor()
    {
        super({
            key:CST.SCENES.INTRO
        })
    }

    init()
    {

    }

    preload()
    {
            this.load.image("wm_bg000",'./assets/graphics/backgrounds/wm_bg000.png');
            this.load.image("mm_bg000",'./assets/graphics/backgrounds/mm_bg000.png');

            this.load.image("vagina_000",'./assets/graphics/backgrounds/backgroundDeco/vagina_000.png');

            this.load.image("dicky000",'./assets/graphics/player/dicky000.png');
    }

    create()
    {
        this.scene.start(CST.SCENES.MENU);
    }

    update()
    {

    }
}