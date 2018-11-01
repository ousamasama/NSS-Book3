document.querySelector("#create--1").addEventListener("click", event => {
    let cake = document.querySelector("#createtext--1").value 
    document.querySelector("#card--1").innerHTML +=
    `<div class="created--card">
            ${cake}
            <br/>
            <button id="deleted--card">Delete This Card</button>
        </div>`
})

// document.querySelector("#deleted--card").addEventListener("click", event => {
//     document.querySelector("#created--card").innerHTML += 
//     `<div class="created--card">
//             bye!
//         </div>`
// })