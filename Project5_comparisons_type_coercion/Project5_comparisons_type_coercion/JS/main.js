//variable with a boolean data type

var x = false;
//printing the data type of the variable x
document.write(typeof x);
document.write("<br>");

//an expression combining a string an d a number
document.write("10" + 8);
document.write("<br>");
//utilizing thr ==operator
document.write(5==5);
document.write("<br>");

//utilizing the === oprtrator
x=1;
y=1;
document.write(x === y);
document.write("<br>");

//utilizing the > and && operator
document.write(4 > 5 && 5 > 6);
document.write("<br>");

//utilizing the < and || operator
document.write(10 > 5 || 11 < 6);
document.write("<br>");

function Not_function(){
    document.getElementById("Not").innerHTML = !(20>10)
}
