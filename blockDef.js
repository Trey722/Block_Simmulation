var screenWidth = window.innerWidth;

let coeffiecentofFriction = 0; 
let g = -1

function handleScreenWidthChange()
{
    screenWidth = window.innerWidth;
}

window.addEventListener('resize', handleScreenWidthChange)


class Block {
    constructor(id, mass, x, x2, velocity, color) 
    {
        this.id = id;
        this.mass = mass
        this.x1 = x;
        this.x2 = x2; 
        this.velocity = velocity;
        this.color = color; 
        this.a = 0; 
    }

    updatePosition() {
        this.a = this.mass * g * coeffiecentofFriction;
            
        if (this.velocity > 0)
        {
            this.velocity += this.a; 
        }

        else if (this.velocity < 0)
        {
            this.velocity -= this.a; 
        }

        

        if (Math.abs(this.velocity) < Math.abs(this.a))
        {
            this.velocity = 0; 
            this.a = 0; 
            
        }

        console.log(this.velocity); 
        console.log("position changing")
        this.x1 += this.velocity;
        this.x2 += this.velocity;
        if (this.x1 <= 0 || this.x2 >= screenWidth) { this.wallCollision(); }
        this.id.style.left = `${this.x1}px`; 
        
       
    }

    wallCollision()
    {
        console.log("wall collision happened"); 
        let p = this.mass * this.velocity; 
        this.velocity = -(p / this.mass); 
    }


    getId() {
        return this.id;
    }

    getPosition() {
        return this.position;
    }

    getVelocity() {
        return this.velocity;
    }

    getColor()
    {
        return this.color; 
    }
}
