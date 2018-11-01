/*
    Purpose:
    This file contains all code related to gathering user
    input from the DOM, or adding adding information from
    the database into the DOM
*/

/*
    You can use a function defined in another JavaScript
    file because, to the browser, all JavaScript files are
    seen as a single, continuous program
*/
const flower = getFlower(1)

// Update the DOM
document.querySelector("#currentFlower").innerHTML = `${flower.commonName}`

// Add a new flower to the database
const tulip = {
    "id": 3,  // See what happens when you change this to 1
    "commonName": "Tulip",
    "species": ["Tylennis oriander"]
}

saveFlower(tulip)