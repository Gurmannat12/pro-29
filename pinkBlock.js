class PinkBlock extends Box{
    constructor(x,y){
        super(x,y,50,60);
    }

    display(){
       fill("lightpink");
       super.display(); 
    }
} 
