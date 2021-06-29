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

    }

    create()
    {
        this.scene.start(CST.SCENES.MENU);
    }

    update()
    {

    }
}