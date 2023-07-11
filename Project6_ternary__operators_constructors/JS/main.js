document.write(Bigger =(5>1) ? "Left number is bigger":"Right number is bigger");
//A function with HTML and JS using ternary operations
function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML =Can_ride + " to ride";
}


//A coustructor function utilizing "new" and "this" keywords
    function Vehicle(make, Model, Year, Color){
        this.vehicle_Make = make;
        this.vehicle_Model = Model;
        this.vehicle_year = Year;
        this.vehicle_Color = Color;
    }

    var Jack = new Vehicle("Dodge","Viper", 2020, "Red");
    var Emily = new Vehicle("Jeep","Trail Hawk", 2019, "White");
    var Erik = new Vehicle("Ford","Pinto", 1971, "Mustard");
    function myfunction(){
        document.getElementById("keywords_and_Constructors").innerHTML ="Erik drives a " +Erik.vehicle_Color +"-colored " + Erik.vehicle_Model + " manufactured in " + Erik.vehicle_year;
        
    }


function count_function() {
    document.getElementById("Counting").innerHTML = count();
    function Count() {
        var starting_point =9;
        function Plus_one() {starting_point += 1;}
        Plus_one();
        return starting_point;
    }
}

// A nested function
function add_strings() {
    var start_string ="Hello";
    function Adding(str){
        start_string = start_string + "" + str;
    }
    Adding("World");
    document.getElementById("Nested_Function").innerHTML = start_string;
}


        
    