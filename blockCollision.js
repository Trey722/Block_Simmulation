function detectBlockCollision(block1, block2) {
    if (block1.x2 > block2.x1 && block1.x1 < block2.x2) {
        if (block1.id !== block2.id) {
            console.log("Collision detected between blocks", block1.id, "and", block2.id);
            resolveCollision(block1, block2);
        }
    }
}

function checkAllBlockCollisions() {
    for (let i = 0; i < blocks.length; i++) {
        for (let j = i + 1; j < blocks.length; j++) {
            detectBlockCollision(blocks[i], blocks[j]);
        }
    }
}

function compare(CurPos, FutPos)
{
    
    
    for (let i = 0; i < CurPos.length; i++)
    {
        

        if (CurPos[i].color !== FutPos[i].color)
        {
        
            return resolveCollision(CurPos[i].block, FutPos[i].block); 
        }

        else {
            console.log("Passing did not happen")
            return false
        }

        
    }
}




function resolveCollision(blockA, blockB) {
   

    let AVi = blockA.velocity; 
    let BVi = blockB.velocity; 
    
    // Calculate initial total momentum and kinetic energy
    let initialTotalMomentum = blockA.mass * blockA.velocity + blockB.mass * blockB.velocity;
    let initialTotalKineticEnergy = 0.5 * blockA.mass * blockA.velocity ** 2 + 0.5 * blockB.mass * blockB.velocity ** 2;



    // Calculate final velocities using conservation laws (for perfectly elastic collision)
    let finalVelocityA = ((blockA.mass - blockB.mass) * blockA.velocity + 2 * blockB.mass * blockB.velocity) / (blockA.mass + blockB.mass);
    let finalVelocityB = ((blockB.mass - blockA.mass) * blockB.velocity + 2 * blockA.mass * blockA.velocity) / (blockA.mass + blockB.mass);

    // Update velocities after collision
    blockA.velocity = finalVelocityA;
    blockB.velocity = finalVelocityB;

    

    // Calculate final total momentum and kinetic energy (for validation)
    let finalTotalMomentum = blockA.mass * blockA.velocity + blockB.mass * blockB.velocity;
    let finalTotalKineticEnergy = 0.5 * blockA.mass * blockA.velocity ** 2 + 0.5 * blockB.mass * blockB.velocity ** 2;





    return true;
}
