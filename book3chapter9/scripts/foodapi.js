console.log("howdy")

function kCalToCal(kcal) {
    kcal / 1000;
}

fetch("http://localhost:8088/food/")
    //makes the data into json
    .then( (foodData) => foodData.json())
    .then( (realData) => {
        console.table(realData)
        let foodList = document.querySelector("#foodList")
        realData.forEach( (food) => {
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`) 
            .then( (foodData) => foodData.json())
            .then( (realData) => {
                console.table(realData)
                foodList.innerHTML+= `
                <div class="foodDiv">
                <h2>${food.name}</h2>
                <p>
                ${food.ethnicity} ${food.type}<br/><br/>
                Ingredients: ${realData.product.ingredients_text}<br/><br/>
                Country of Origin: ${realData.product.countries}<br/><br/>
                Barcode: ${food.barcode}</p>
                Calories per serving: ${realData.product.nutriments.energy} kcal<br/><br/>
                Fat per serving: ${realData.product.nutriments.fat} g<br/><br/>
                Sugar per serving: ${realData.product.nutriments.sugars} g<br/><br/>
                </div>
                `
            })
        })
    })