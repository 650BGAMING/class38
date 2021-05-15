class Form {
    constructor(){
        this.input = createInput("what is your name");
        this.button = createButton("lets's go");
        this.greeting = createElement('h3');
    }
    hide(){
        this.input.hide();
        this.button.hide();  
        this.greeting.hide();
    }

    
    display(){
        var title = createElement('h2');
        title.html("Car Go Brrrr");
        title.position(displayWidth/2 - 50,0);       
        this.input.position(displayWidth/2 - 40,displayHeight/2-80);
        this.button.position(displayWidth/2 - 30,displayHeight/2);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("hi if you win i will lose"+player.name);
            this.greeting.position(displayWidth/2 - 60,displayHeight/4);
        })


    }




}