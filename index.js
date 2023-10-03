const btnAll = document.querySelector("#btn-all");
const btnBurger = document.querySelector("#btn-burger");
const btnJap = document.querySelector("#btn-jap");
const btnIt = document.querySelector("#btn-it");
const btnNear = document.querySelector("#btn-near");
const btnBudget = document.querySelector("#btn-budget");

const burger = document.querySelectorAll(".italian, .japanese");
const japanese = document.querySelectorAll(".italian, .burger");
const italian = document.querySelectorAll(".burger, .japanese");
const budget = document.querySelectorAll(".pricy");
const near = document.querySelectorAll(".far");

btnAll.onclick = function() {
    window.location.reload();
}
btnBurger.onclick = function() {
    for (let i = 0; i < burger.length; i++) {
        burger[i].remove();
    }
}
btnJap.onclick = function() {
    for (let i = 0; i < japanese.length; i++) {
        japanese[i].remove();
    }
}
btnIt.onclick = function() {
    for (let i = 0; i < italian.length; i++) {
        italian[i].remove();
    }
}
btnBudget.onclick = function() {
    for (let i = 0; i < budget.length; i++) {
        budget[i].remove();
    }
}
btnNear.onclick = function() {
    for (let i = 0; i < near.length; i++) {
        near[i].remove();
    }
}





