const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

/* Get my html elements */
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const main = document.querySelector("main");

/* Function to get a random number between 0 and array length */
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

/* Function to get the button work */
btn.addEventListener("click", function () {
    /* Keep track of the current color */
    let hexColor = "#";

    /* Loop 6 times and in each iteration, add a random character from the array
    to the variable hexColor
    */
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    /* Change background to the random color we got from the loop */
    main.style.backgroundColor = hexColor;

    /* Change the color of the text according to the random color */
    color.textContent = hexColor;

    /* Change text color according to the random color */
    color.style.color = hexColor;
})