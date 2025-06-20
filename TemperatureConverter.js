//Temperature Converter - A program that converts from Fahrenheit to Celsius and vice versa

// Define the fahrenheit function
function fahrenheitToCelsius(fahrenheit){
    return (fahrenheit - 32) * 5/9
    
}


function celsiusToFahrenheit(celsius){
    return (celsius * 9/5) + 32;
    
}

// Get User Input 

let choice = prompt("Please what do you want to convert from? SELECT: (C) FOR CELSIUS AND (F) FOR FAHRENHEIT")
let Temperature = parseFloat(prompt("What is the temperature? "))

// RUNNING THE PROGRAM
// Select the appropriate option and choose the right function to run, using a conditional statement 

if (choice.toUpperCase() === "F"){
    answer = fahrenheitToCelsius(Temperature)
    alert(Temperature + " in Celsius is " + answer)
} else if(choice.toUpperCase() === "C"){
    answer = celsiusToFahrenheit(Temperature)
    alert(Temperature + " in Fahrenheit is " + answer)
}else {
    alert("Fuck off")
}