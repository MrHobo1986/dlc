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
            this.load.image("spinner000",'./assets/graphics/backgrounds/backgroundDeco/spinner_000.png');  
            this.load.image("play",'./assets/graphics/ui/play.png');   
            this.load.image("settings",'./assets/graphics/ui/settings.png');
            this.load.image("quit",'./assets/graphics/ui/quit.png');           
            this.load.image("dicky000",'./assets/graphics/player/dicky000.png');
            this.load.image("dicky001",'./assets/graphics/player/dicky001.png');
            

            this.load.audio("000",'./assets/audio/music/000.mp3')



            let loadingBar = this.add.graphics({
                fillStyle:{
                    color: 0xffffff
                }
            });

            this.load.on("progress", (percent)=>{
                loadingBar.fill(0,300, 400*percent,50)
                   console.log(percent); 
            });

            this.load.on("complete", ()=>{
                   console.log('done'); 
                   this.scene.start(CST.SCENES.MENU);
            })
            
    }

    create()
    {
        //this.scene.start(CST.SCENES.MENU);
    }

    update()
    {

    }
}