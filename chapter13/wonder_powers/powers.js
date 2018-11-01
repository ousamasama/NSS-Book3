let enableFlight = () => {
    document.querySelector("#flight").className = "enabled"
}

let enableMindreading = () => {
    document.querySelector("#mindreading").className = "enabled"
}

let enableXray = () => {
    document.querySelector("#xray").className = "enabled"
}

let sections = document.querySelectorAll("section"), i;

let enableAll = () => {
    for(i = 0; i < sections.length; i++) {
        sections[i].className = "enabled"
    }
    // document.querySelector("#flight").className = "enabled"
    // document.querySelector("#mindreading").className = "enabled"
    // document.querySelector("#xray").className = "enabled"
}

let disableAll = () => {
    for(i = 0; i < sections.length; i++) {
        sections[i].className = "disabled"
    }
    // document.querySelectorAll("#powerList").className = "disabled"
    // document.querySelector("#flight").className = "disabled"
    // document.querySelector("#mindreading").className = "disabled"
    // document.querySelector("#xray").className = "disabled"
}

let activatePower = () => {
    let split = event.target.id.split("-")
    if(split[1] === "flight") {
        document.querySelector("#flight").className = "enabled"
    } else if(split[1] === "mindreading") {
        document.querySelector("#mindreading").className = "enabled"
    } else if(split[1] === "xray") {
        document.querySelector("#xray").className = "enabled"
    }
}

document.querySelector("#activate-flight").addEventListener("click", activatePower)
document.querySelector("#activate-mindreading").addEventListener("click", activatePower)
document.querySelector("#activate-xray").addEventListener("click", activatePower)
document.querySelector("#activate-all").addEventListener("click", enableAll)
document.querySelector("#deactivate-all").addEventListener("click", disableAll)