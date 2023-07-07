//main.js 
function addition() { //Defining and naming the addition function 
var add = 2+2; 
document.getElementById("add").innerHTML = "2 + 2 = " + add;
}
function subtraction() { //Defining and naming the sub function 
    var subtraction = 5-2; 
    document.getElementById("subtraction").innerHTML = "5 - 2 = " + subtraction;
}
function multiplication() { //Defining and naming the multiplication function 
    var mult = 5 * 12; 
    document.getElementById("mult").innerHTML = "5 * 12= " + mult;
}
function division() { //Defining and naming the division function 
    var div = 36/6; 
    document.getElementById("div").innerHTML = "36 / 6 = " + div;
}

function more_math() { //Defining and naming the more_math function 
    var simple_math = (1+2)*10/2-5; 
    document.getElementById("simple_math").innerHTML = "(1+2) * 10 / 2 - 5 = " + simple_math;
}

function modulus_operator() { //Defining and naming the modulus_operator function 
    var modulus_operator = 25/6; 
    document.getElementById("modulus_operator").innerHTML = "25 / 6 = " + modulus_operator;   
}
function negation_operator() { //Defining and naming the negation_operator function 
    var x = 25; 
    document.getElementById("negation_operator").innerHTML = -x;   
}
function increment(){ 
var X = 5;
X++;
document.write(X);
}

function Decrement(){ 
    var Y = 5;
    Y--;
    document.write(Y);
    }
function random(){ //Defining and naming the random fuction
        document.getElementById("ran").innerHTML = Math.random()*10;
}