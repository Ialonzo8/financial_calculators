"use strict"


//going to run the init function after the entire page is loaded
window.onload = init;

function init() {

    //get the buttons from the page so we can work with them in JS
    const Calculate = document.querySelector("#Calculate");


    //wire up the functions to the click of the buttons
    Calculate.addEventListener("click", CalculateMortgage);


}

//create an add function that gets num1 and num2 of the page and sums them
function CalculateMortgage() {

    //get the values out of the input fields the user types in
    let Principal = Number(document.querySelector("#Principal").value);
    let Rate = Number(document.querySelector("#Rate").value);
    let Length = Number(document.querySelector("#Length").value);

    //do the math
    let result = Principal + Rate;

    //message
    let message = `A $ ${Principal} loan at ${Rate}% interest for ${Length} years would have a ${result}/mo payment with a total interest of $36,115.99`

    //put the result in the answer input field
    document.querySelector("#Result").innerHTML = message;

   
}

