fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        console.table(parsedFoods)
        let foodList = document.querySelector("#foodList")
        parsedFoods.forEach((food) => {
            foodList.innerHTML += 
            `<h2>${food.name}</h2>`
        })
    })