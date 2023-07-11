//concat() method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence.";
    var whole_sentence = part_1.concat( part_2, part3, part4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//slice() method
function slice_Method(){
    var sentence = "All work and play make Johnny a dull boy.";
    var Section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = Section;
}

//number to string method
function string_Method(){
    var X = 162;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//toPrecision() method
function Precision_Method(){
    var X = 12865.874343687;
    document.getElementById("Precision").innerHTML = X.toPrecision(5);
}