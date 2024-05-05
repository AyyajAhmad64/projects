// Created a first variable for screen class as a screenDisplay
const screenDisplay = document.querySelector('.screen')

// Created a second variable for button tag as a buttons
const buttons = document.querySelectorAll('button')

// Empty array to store values of a buttons
let calculation = []

// This variable stores the entire calculation, including the operator and operands.
let accumlativeCalculation

// created a function 'calculate'
function calculate(button) {
    const value = button.textContent

    // If user clicks on 'Clear' button, the screenDisplay will show the 0(Empty array) and clear the text.
    if (value == "Clear") {
        calculation = []
        screenDisplay.textContent = '0'
    }

    // If user clicks on '=' button then accumulativeCalculation will store the evaluted number and display the answer in screenDisplay
    else if(value === "="){
        screenDisplay.textContent = eval(accumlativeCalculation)
    }

    // For any other value, it pushes the value to the calculation array, joins the elements in the array to form the accumlativeCalculation string, and updates the screen display with the new input.
    else {
        calculation.push(value)
        accumlativeCalculation = calculation.join('')
        screenDisplay.textContent = accumlativeCalculation
    }
}

// The code uses forEach to iterate over all the buttons selected earlier.
// For each button, it registers a click event listener that calls the calculate function with the clicked button as a parameter.
buttons.forEach(button => button.addEventListener('click', () => calculate(button)))



/* screenDisplay: This variable references the element on the page that will display the calculator's output.
buttons: This variable references all of the buttons on the calculator.
calculation: This variable stores the current calculation that the user is entering.
accumulativeCalculation: This variable stores the entire calculation, including the operator and operands.
The calculate() function is called whenever a button is clicked. This function takes the button that was clicked as an argument and performs the following actions:

If the button is the "Clear" button, the calculation variable is emptied and the screenDisplay element is set to "0".
If the button is the "=" button, the accumulativeCalculation variable is evaluated and the result is displayed in the screenDisplay element.
Otherwise, the value of the button is added to the calculation variable and the accumulativeCalculation variable is updated to reflect the new calculation. The updated calculation is then displayed in the screenDisplay element.
The buttons.forEach() loop iterates over all of the buttons on the calculator and adds an event listener to each button. The event listener calls the calculate() function when the button is clicked.

Here is a step-by-step explanation of how the calculator works:

The user enters a number on the calculator by clicking on one of the number buttons.
The calculate() function is called with the number button as an argument.
The value of the number button is added to the calculation variable and the accumulativeCalculation variable is updated to reflect the new calculation.
The updated calculation is displayed in the screenDisplay element.
The user can continue to enter numbers and operators until they are ready to evaluate the calculation.
To evaluate the calculation, the user clicks on the "=" button.
The calculate() function is called with the "=" button as an argument.
The accumulativeCalculation variable is evaluated and the result is displayed in the screenDisplay element. */