// Use JavaScript to obtain a reference to the first section with the class of 
// article_header and change its text with the textContent property to 
// "Welcome to the {insert your name here} blog"

const pizza = document.querySelector(".article__header")
pizza.textContent = "Welcome to Ousama's blog"


// Use JavaScript to obtain a reference to all article__header 
// elements and change their classList property value to article__header important.
const pizza2 = document.querySelectorAll(".article__header")
for (i = 0; i < pizza2.length; i++) {
    pizza2[i].classList.add("important")
}

// Obtain a reference the element with a class of dashed and remove it.
const pizza3 = document.querySelector(".dashed")
pizza3.classList.remove("dashed")

// Obtain a reference to the element with a class of article_footer and add the class of goldenrod it.
const pizza4 = document.querySelector(".article__footer")
pizza4.classList.add("goldenrod")