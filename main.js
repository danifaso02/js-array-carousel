"use: strict";

// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

// IMMAGINI
const imgOne = document.getElementById("one");
const imgTwo = document.getElementById("two");
const imgThree = document.getElementById("three");
const imgFour = document.getElementById("four");
const imgFive = document.getElementById("five");

let currentIndex = 0;

// SHEVRON
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");

// SCORRIMENTO PROSSIMA FOTO
nextButton.addEventListener("click", function(){
    currentIndex++; 

    if(currentIndex === 5){
        currentIndex = 0;
        imgFive.classList.remove("face");
        imgOne.classList.add("face");
    }

    if(currentIndex === 1){
        imgOne.classList.remove("face");
        imgTwo.classList.add("face");
    }

    if(currentIndex === 2){
        imgTwo.classList.remove("face");
        imgThree.classList.add("face");
    }

    if(currentIndex === 3){
        imgThree.classList.remove("face");
        imgFour.classList.add("face");
    }

    if(currentIndex === 4){
        imgFour.classList.remove("face");
        imgFive.classList.add("face");
    }

});

// SCORRIMENTO FOTO PRECEDENTI
previousButton.addEventListener("click", function(){

    if(currentIndex === -1){
        currentIndex = 4;
    }

    if(currentIndex === 0){
        imgOne.classList.remove("face");
        imgFive.classList.add("face");
        currentIndex--;
    }

    if(currentIndex === 1){
        imgTwo.classList.remove("face");
        imgOne.classList.add("face");
        currentIndex--;
    }

    if(currentIndex === 2){
        imgThree.classList.remove("face");
        imgTwo.classList.add("face");
        currentIndex--;
    }

    if(currentIndex === 3){
        imgFour.classList.remove("face");
        imgThree.classList.add("face");
        currentIndex--;
    }

    if(currentIndex === 4){
        imgFive.classList.remove("face");
        imgFour.classList.add("face");
        currentIndex--;
    }
});