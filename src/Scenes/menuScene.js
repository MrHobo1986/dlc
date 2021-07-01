import { CST } from "../CST"
export  class menuScene extends Phaser.Scene
{
    constructor()
    {
        super({
            key:CST.SCENES.MENU
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
        this.add.image(400,300,'dicky000')
    }

    update()
    {

    }
}