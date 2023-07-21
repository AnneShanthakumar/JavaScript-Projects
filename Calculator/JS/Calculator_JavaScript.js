//Creates an object to keep track value.
const calculator = {
    //This will display 0 on the calculator screen.
    Display_value: '0',
    //This will hold the first operand for any expressions, we set it to null for now.
    First_Operand: null,
    //This check wether or not the second operand has been inputted by the user.
    Wait_Second_Operand: false,
    //This will hold the operator, we it to null for now.
    operator: null,
};

//This modifies value each time a button is clicked on.
function Input_Digit(digit) {
    const{Display_value, Wait_Second_Operand} = calculator;
    //This checks if the wait_second_operand is true and sets Display_value
    //to the key that was clicked on.
    if (Wait_Second_Operand === true) {
        calculator.Display_value = digit;
        calculator.Wait_Second_Operand =false;
    }else {
        //This overwrites Display vale if the current value is 0
        //otherwise it adds onto it.
        calculator.Display_value = Display_value === '0' ? digit : Display_value + digit;
    }
}

//this section handles decimal points
function Input_Decimal (dot) {
    //This ensure that accidental clicking of the decimal point dosen't
    //cause bug in the operation.
    if (calculator.Wait_Second_Operand === true) return;
    if (!calculator.Display_value.includes(dot)){
        //we are saying that if the display_value dose contain a decimal point
        //we want to add a decimal point.
        calculator.Display_value += dot;
    }
}

//This section handles operators
function Handdle_Operator(next_Operator) {
    const {First_Operand, Display_value, operator} = calculator;
    //When an operator key is pressed we convert the current number
    //displayed on the screen a number and tnen store the result in 
    //Calculator First_Operand if it dosen't already exist.
    const Value_Of_Input= parseFloat(Display_value);
    //Check if an operator already exists and then store the result in
    //then update the opeator an exits from the function.
    if (operator && calculator.Wait_Second_Operand) {
        calculator.operator = next_Operator;
        return
    }
    if (First_Operand == null) {
        calculator.First_Operand =  Value_Of_Input;
    } else if (operator){// check if an operator already exists
    const Value_Now = First_Operand ||0;
    //if operator exists, property lookup is performed for operator
    //in the perform_calculation object and the fuction that matches the 
    //operator is executed.
    let result = perform_calculation[operator](Value_Now, Value_Of_Input);
    //here we add a fixed amount of numbers after the decimal.
    result = Number(result).toFixed(9);
    //This will remove any trailing 0's
    result =(result *1).toString();
    calculator.Display_value = parseFloat(result);
    calculator.First_Operand = parseFloat(result);
}
calculator.Wait_Second_Operand = true;
calculator.operator = next_Operator;
}
const perform_calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};
function calculator_reset() {
    calculator.Display_value ='0';
    calculator.First_Operand =null;
    calculator.Wait_Second_Operand =false;
    calculator.operator = null;
}
//This function updates the calculator screen with the contens of Display_value
function update_Display(){
//Make use of the calculator-screen with the contents of Display_value
//Input tag in the HTML document
const display =document.querySelector('.calculator-screen');
display.Value = calculator.Display_value;
}

update_Display();
//This section moniters button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) =>{
//The target variable is an object that represents the element 
//that was clicked.
const { target } = event;
//If the element that was click on is not a button exit the function.
if(!target.matches('button')){
    return;
}
if(target.classList.contains('operator')){
 Handdle_Operator(target.Value);
 update_Display();
 return;   
}
if (target.classList.contains('operator')) {
    Input_Decimal(target.Value);
    update_Display()
    return
}
//Ensures that AC clears all inputs from the Claculator screen.
If (target.classList.contains('all-clear')) {
    calculator_reset();
    update_Display();
    return;
}
Input_Digit(target.Value);
update_Display();
});



