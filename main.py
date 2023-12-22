import pygame
import sys

global collisionAmount 
collisionAmount  = 0 
collisionProtocal = 0 

global percesion 

#Right is postive left is negative
class object:
    def __init__(self, mass, position1, velocity, accleration, color):
        self.mass = mass
        self.p1 = position1
        self.size = 100
        self.p2 = position1 + self.size
        self.v = velocity
        self.a = accleration 
        self.color = color
        
    def updatePosition(self):
        self.p1 += self.v
        self.p2 += self.v
        self.v += self.a
        
        
    def addForce(self, Newtons):
        newAcceleration = Newtons / self.mass 
        self.a += Newtons
        
    def wallCollision(self):
        p = self.mass * self.v 
        self.v = -(p / self.mass)
        global collisionAmount
        collisionAmount += 1

        


def collisionProtocal(mass1, mass2, velocity1, velocity2):
    m1 = mass1
    m2 = mass2
    
    totalMass = m1 + m2
    
    V1i = velocity1
    V2i = velocity2 
    
    p1 = m1 * V1i
    p2 = m2 * V2i
    
    velocity1final = ( p1 +  (2 * p2) - (m2 * V1i) ) / (totalMass)
    velocity2final = V1i + velocity1final - V2i
    
    p1New = m1 * velocity1final
    p2New = m2 * velocity2final
    
    print(p1 + p2, p1New + p2New)
    
    
    return velocity1final, velocity2final
    
   
        
def detectCollision(block1, block2):
    
    if block1.p2 >= block2.p1:
        print("Collision")
        block1.v, block2.v = collisionProtocal(mass1=block1.mass, mass2=block2.mass, velocity1=block1.v, velocity2=block2.v)
        
        return True
    return False


def updatePositons(objects):
    for i in objects:
        if i.p1 <= 0:
            i.wallCollision()
        drawSqaure(screen, i.color, i.p1, 400 - i.size, i.size)
        i.updatePosition()
        
def endDetection(block1, block2):
    if (block2.v > 0 and block2.v > block1.v):
        print("The simmulation is over")
        
         
      
    
    

block = object(1, 100, 0, 0, (0, 255, 0))

block2 = object(100 ** 3, 600, -1, 0, (255, 0, 0))

allObjects = [block, block2]


def drawSqaure(screen, color, x, y, sideLength):
    pygame.draw.rect(screen, color, pygame.Rect(x, y, sideLength, sideLength))
    
    
def addTextContents(string, x, y):
    text_render = font.render(string, True, white)
    screen.blit(text_render, (x, y))
    
def create_popup(popup_width, popup_height):
    popup_screen = pygame.display.set_mode((popup_width, popup_height))
    pygame.display.set_caption("Pop-up Window")
    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
        
        # Other pop-up logic and rendering would go here...
        
        pygame.display.flip()
    
    # Destroy the pop-up window when it's closed
    pygame.display.quit()
    
# DEFINATIONS 
height = 720 
width = 1280
black = (0, 0, 0)
white = (255, 255, 255)


# For text 
pygame.font.init()  # Initialize the font module
font = pygame.font.Font(None, 36) 

pygame.init()
screen = pygame.display.set_mode((width, height))
clock = pygame.time.Clock()
running = True

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
            
    screen.fill("black")


    
            

    if detectCollision(block, block2):
        collisionAmount += 1
   
    updatePositons(allObjects)
    
    collisionText = f"Colisions = {collisionAmount}"
    greenMass = f"Green Mass = {block.mass}"
    greenVelocity = f"Green Velocity = {block.v}"
    RedMass = f"Red Mass = {block2.mass}"
    redVelocity = f"Red Velocity = {block2.v}"
    
    positions = f"Green1 = {round(block.p1, 4)}, Green2 = {round(block.p2, 4)}, Red1 = {round(block2.p1, 4)}, Red2 = {round(block2.p2, 4)}"
    
    addTextContents(collisionText, 10, 10)
    addTextContents(greenMass, 10, 32)
    addTextContents(greenVelocity, 10, 32 + 22)
    addTextContents(RedMass, 10, 32 + 22 + 22)
    addTextContents(redVelocity, 10, 32 + 22 + 22 + 22)
    addTextContents(positions, 10, 32 + 22 + 22 + 22 + 22)

    
   
    
    
    
    
    
    
    
    pygame.display.flip()
   
    clock.tick(60)
    
    
pygame.quit()