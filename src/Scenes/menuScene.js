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
        this.add.image(0,-100,'mm_bg000').setOrigin(0,0)
        this.add.image(400,300,'vagina_000')
    }

    update()
    {

    }
}