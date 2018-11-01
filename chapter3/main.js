//Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

for (i = 0; i <= 100; i++) {
    if (i % 5 === 0 && i % 7 === 0) {
        console.log(i + " ChickenMonkey")
    } else if (i % 7 === 0) {
        console.log(i + " Monkey")
    } else if (i % 5 === 0 && i % 7 === 0) {
        console.log(i + " Chicken")
    }
}

//Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.
let bandNumber = 0;
const takeNumber = function (bandName) {
    bandNumber += 1;
    return (`${bandNumber}. ${bandName}`);
}

const scum = takeNumber("Galactic Scum")
console.log(scum)

const under = takeNumber("Underdogs")
console.log(under)

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

for (i = 0; i < uncookedFood.length; i++) {
    grill(uncookedFood[i]);
}

console.log(cookedFood)