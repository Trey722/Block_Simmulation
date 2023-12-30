let openPopUps = []; //Keeps track of all openPopUps 


//This sets the popUp's css display for block to none
function openPopUp(idName) 
{
    let item = document.getElementById(idName);

    if (item) {
        item.style.display = "block";
        openPopUps.push(idName);
    } else {
        console.log("Popup element not found!");
    }

    console.log(openPopUps);
}






//Given an element and an array this function removes the element from the array 
function dealteElementFromArray(array, element)
{
    let indexToRemove = array.indexOf(element);
    if (indexToRemove !== -1) {
    array.splice(indexToRemove, 1);
}
}



//THis closes a popUp and removes it from the openPopUps global array 
function closePopUp(idName)
{
    let item = document.getElementById(idName);

    if (item) {
        item.style.display = "none";
        dealteElementFromArray(openPopUps, item);
    } 

    else {
        console.log("Popup element not found!");
    }
}


function onlyAllowNumbers(id) {
    let curElement = document.getElementById(id);

    curElement.addEventListener('input', function(event) {
        // Allow negative numbers with optional leading negative sign (-) and only numeric characters afterward
        this.value = this.value.replace(/[^\d-]|(?<=-)\D/g, '');
    });
}

//This adds a block to the main thing
function sendData() {

    closePopUp("addBlock")

    // Retrieve the values from input fields
    const massValue = document.getElementById('mass').value;
    const velocityValue = document.getElementById('velocity').value;
  
    // Convert the values to numbers
    const mass = parseFloat(massValue);
    const velocity = parseFloat(velocityValue);

    if (massValue <= 0)
    {
        openError("No masses less then or equal to 0 are allowed");
    }
  
    // Check if the conversion was successful
    if (!isNaN(mass) && !isNaN(velocity)) {
        addBlock(mass, velocity); 
    } else {
      openError("Only valid numbers are allowed"); 
    }
  }


//This opens an error message using the text 
function openError(text, header=null)
{

    if (header != null)
    {
        let element = document.getElementById("error");

        let headerElemenet = document.getElementById('errorHeader'); 

        headerElemenet.innerHTML = header; 

        let errorText = document.getElementById("errorText"); 

        errorText.innerHTML = text; 

        element.style.display = "block"; 

        openPopUp.push("error"); 


    }
    let element = document.getElementById("error");

    let errorText = document.getElementById("errorText"); 

    errorText.innerHTML = text; 

    element.style.display = "block"; 

    openPopUp.push("error"); 

}

function openWarning(text)
{
    let element = document.getElementById("warning");

    let errorText = document.getElementById("warningText"); 

    errorText.innerHTML = text; 

    element.style.display = "block"; 

    openPopUps.push("error");
}

function sendEdits()
{

    closePopUp("edit");
    let newGravity = document.getElementById("gravity").value;
    let newFriction =  document.getElementById("friction").value;



    newGravity = parseFloat(newGravity); 
    newFriction = parseFloat(newFriction); 

   


    if (!isNaN(newGravity) && !isNaN(newFriction)) {
        if (newGravity > 0)
        {
            openError("Graity must be less then or equal to 0"); 
            
        }

        g = newGravity;
            coeffiecentofFriction = newFriction; 
           
    } else {
      openError("Only valid numbers are allowed"); 
    }
}


onlyAllowNumbers("mass");
onlyAllowNumbers('velocity');
