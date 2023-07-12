var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X +100 +"<br>");
}

//If statment 
Add_numbers_1();
Add_numbers_2();

// if statement
if (5 < 8) {
    document.write("The left number is smaller than the number on the right." + "<br>")
}

//if statment with get date and get hours
function get_Date(){
if ( new Date().getHours()<12) {
    document.getElementById("Greeting").innerHTML = "Good morning! Have a nice Day!" + "<br>";
}
}

//Else statement
function Age_Function(){
    Age =document.getElementById("Age").value;
    if (Age >= 18){
        Vote = "You are old enough to vote!";
    }
    else{
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

// Else if statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply ;
    if (Time < 12 == Time > 0) {
        Reply="Good Morning!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "Good Afternoon!";
    }
    else {
        Reply = "Good Evening!";
    }
    document.getElementById("Time_of_the_day").innerHTML = Reply;
}