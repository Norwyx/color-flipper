const colors = ["green", "red", "purple", "orange", "yellow", "blue",];

/* Targetting html elements */
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

/* Function to get a random number between 0 and array length */
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

/* Function to make the button work */
btn.addEventListener("click", function () {
    /* Use the random number we got from the function */
    const randomNumber = getRandomNumber();
    
    /* Use the random number and access the array. With that, change background */
    document.body.style.backgroundColor = colors[randomNumber];

    /* Change the color of the text according to the random color */
    color.textContent = colors[randomNumber];
})