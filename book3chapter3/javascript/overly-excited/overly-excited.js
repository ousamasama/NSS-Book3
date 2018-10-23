// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
// function addExcitement (theWordArray) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         // Concatenate the new word onto buildMeUp
//         buildMeUp += ` ${theWordArray[i]}`
//         // Print buildMeUp to the console
//         console.log(buildMeUp)
//     }

// }

// Invoke the function and pass in the array
// addExcitement(sentence)

//Add logic to addExcitement that places an exclamation point (!) after every third word. Read the following English statement and write the equivalent in JavaSript code to make it work.
//If the current value of the counter variable can be evenly divided by 3 (using the JavaScript remainder operator) add a single exclamation point (!) to the current word in the array.

// function addExcitement (theWordArray, punctuation) {
//     let buildMeUp = ""
//     for (let i = 0; i < theWordArray.length; i++) {
//         if (i % 3 === 0 && i > 0) {
//             buildMeUp += ` ${theWordArray[i]}${punctuation}`
//             console.log(buildMeUp)   
//         } else {
//         buildMeUp += ` ${theWordArray[i]}`
//         console.log(buildMeUp)
//         }
//     }

// }

// addExcitement(sentence, "?")

let addExcitement = (theWordArray, punctuation) => {
    let buildMeUp = ""
    for (let i = 0; i < theWordArray.length; i++) {
        if (i % 3 === 0 && i > 0) {
            buildMeUp += ` ${theWordArray[i]}${punctuation}`
            console.log(buildMeUp)   
        } else {
        buildMeUp += ` ${theWordArray[i]}`
        console.log(buildMeUp)
        }
    }
}

addExcitement(sentence, "?")