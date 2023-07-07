function my_Dictionary(){
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        sound:"Bark!"
    };
    document.getElementById("Animal").innerHTML = Animal.sound;
}
function my_Dictionary1(){
    var Animal1 = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        sound:"Bark!"
    };
    delete Animal1.sound
    document.getElementById("Animal1").innerHTML = Animal1.sound;
}