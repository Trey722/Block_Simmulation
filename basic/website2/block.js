let colorIndex = 0;
let blocks = []




//Function is used to clear the stats section
function deleteAllInformationContent() {
    let informationElement = document.querySelector(".information");
    informationElement.innerHTML = ""; 
}

//function to contorl gravity and friction stats

function updateFrictionandGravity()
{
    let parent = document.querySelector(".information");

    let newBlock = document.createElement("p"); 

    newBlock.innerHTML = `Gravity is = ${g} Coefficient of friction = ${coeffiecentofFriction}`;

    newBlock.style.color = "white"; 

    parent.appendChild(newBlock); 
}

//function adds data to stats setion 
function blockStats(index)
{
    let parent = document.querySelector(".information");

    let newBlock = document.createElement("p"); 

    

    let curAnyalize = blocks[index]; 

    newBlock.innerHTML = `Color: ${curAnyalize.getColor()} 
                     Mass = ${curAnyalize.mass.toFixed(2)} 
                     Position = ${curAnyalize.x1.toFixed(2)} 
                     Velocity = ${curAnyalize.getVelocity().toFixed(2)} 
                     Acceleration = ${curAnyalize.a.toFixed(2)}`;


    newBlock.style.color = "white"; 

    parent.appendChild(newBlock);

    return
}


function addBlock(mass, velocity) {
    let color = ["red", "green", "blue", "yellow"];
    let sideLength = 100


    for (let i = 0; i < blocks.length; i++)
    {
        if (blocks[i].x1 > 400 && blocks[i].x1 < 400 + sideLength)
        {
            console.log("This will lead to an object overlap"); 
            openError("This will lead to an object overlap")
        }

        else if (blocks[i].x2 > 400 && blocks[i].x2 < 400 + sideLength)
        {
            console.log("This will lead to an object overlap");
            openError("This will lead to an object overlap")
        }
    }

    let parent = document.querySelector(".blockContainer");

    let newBlock = document.createElement("div");

    
    newBlock.style.width = `${sideLength}px`; 
    newBlock.style.height = `${sideLength}px`;

    newBlock.style.backgroundColor = color[colorIndex % color.length]; // Accessing colors based on colorIndex
   

    newBlock.style.position = "absolute";
    newBlock.style.top = '408px'; 
    newBlock.style.left = '400px'; 

    let newBlockObject = new Block(newBlock, mass, 400, 400 + sideLength, velocity, color[colorIndex % color.length]);

    blocks.push(newBlockObject); 
    
    parent.appendChild(newBlock);
    colorIndex += 1;
}

function animateSimulation() {
    deleteAllInformationContent();
    updateFrictionandGravity(); 
    if (blocks.length > 0)
    {

    
    let preV = blocks[0].getVelocity();
    if (checkAllBlockCollisions())
    {
        console.log(preV, block[1].velocity); 
    } 
    
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].updatePosition();
        blockStats(i); 

    }

    
}


 
    requestAnimationFrame(animateSimulation);
}



animateSimulation();
