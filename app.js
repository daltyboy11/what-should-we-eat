'use strict'

var foodChoices = [
    "pizza",
    "sushi",
    "tacos",
    "burritos",
    "burgers",
    "hot dogs",
    "ramen",
    "chinese"
];

var images = [
    "pizza.png",
    "sushi.png",
    "tacos.png",
    "burritos.png",
    "burgers.png",
    "hotdog.png",
    "ramen.png",
    "chinese.png"
];

var foodChoice = foodChoices[Math.floor(Math.random() * foodChoices.length)];
var foodImageSrc = "./images/" + images[foodChoices.indexOf(foodChoice)];
console.log("Food Image Src");
console.log(foodImageSrc);

var foodLabel = document.getElementById("foodLabel");
foodLabel.innerHTML = foodChoice.toLocaleUpperCase();

var foodImage = document.getElementById("foodImage");
foodImage.src = foodImageSrc;