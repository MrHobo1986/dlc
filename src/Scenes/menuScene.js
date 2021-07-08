import { CST } from "../CST"
var spinner000;

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

        this.add.image(0,-100,'mm_bg000').setOrigin(0,0).setDepth(0);
        spinner000 = this.add.image(398,320,'spinner000').setDepth(1).setScale(1.05);
      let playbutton= this.add.image(230,230,'play').setDepth(4);
       let settingsbutton= this.add.image(550,330,'settings').setDepth(4);
        let quitbutton= this.add.image(400,520,'quit').setDepth(4);
        this.add.image(400,300,'vagina_000').setDepth(3);
        this.sound.play('000',{
            loop: true,
            volume:0.01
        })
        playbutton.setInteractive();

        playbutton.on('pointerdown',()=>{
            console.log('play clicked')
        })

    }

    update()
    {
        spinner000.rotation += 0.1;
       //spinner001.rotation-=0.1;
    }
}