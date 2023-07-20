// This variable keeps track of whose turn it is.
let activePlayer = 'X';
// This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

// This function is for placing an X or O in a square.
function placeXorO(squareNumber) {
    // This condition ensures a square hasn't been selected already.
    // The .some() method is used to check each element of the selectedSquares array
    // to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // This variable retrieves the HTML element id that was clicked.
        let selectedSquare = document.getElementById(squareNumber);
        // This condition checks who's turn it is.
        if (activePlayer === 'X') {
            // If active player is equal to 'X', the x.png is placed in HTML.
            selectedSquare.style.backgroundImage = 'url("images/x.png")';
        } else {
            // If active player is equal to 'O', the o.png is placed in HTML.
            selectedSquare.style.backgroundImage = 'url("images/o.png")';
        }
        // Square number and activePlayer are concatenated together and added to the array.
        selectedSquares.push(squareNumber + activePlayer);
        // This call to a function checks for any win condition.
        checkWinConditions();
        // This condition is for changing the active player.
        if (activePlayer === 'X') {
            // If active player is 'X', change it to 'O'.
            activePlayer = 'O';
        } else {
            // Change the active player to 'X'.
            activePlayer = 'X';
        }
        // This function plays placement sound.
        new Audio('media/place.mp3').play();
        // This condition checks to see if it is the computer's turn.
        if (activePlayer === 'O') {
            // This function disables clicking for the computer's turn.
            disableclick();
            // This function waits 1 second before the computer places an image and enables click.
            setTimeout(function() { computersTurn(); }, 1000);
        }
        // Returning true is needed for our computerTurn() function to work.
        return true;
    }
}

// This function results in a random square being selected by the computer.
function computersTurn() {
    // This boolean is needed for our while loop.
    let success = false;
    // This function results in a random number 0-8.
    let pickASquare;
    // This condition allows our while loop to keep trying if a square is selected already.
    while (!success) {
        // A random number between 0 and 8 is selected.
        pickASquare = String(Math.floor(Math.random() * 9));
        // If the random number evaluated returns true, the square hasn't been selected yet.
        if (placeXorO(pickASquare)) {
            // This line calls the function.
            placeXorO(pickASquare);
            // This changes our boolean and ends the loop.
            success = true;
        }
    }
}

// ... (the rest of the code remains unchanged)
//This function makes our body element temporarily unclickable.
function disableclick() {
    //This makes our body unclickable.
    document.body.style.pointerEvents = 'none';
    //This makes our body clickable again after 1 second.
    setTimeout(function() { document.body.style.pointerEvents = 'auto'; }, 1000);
}
//This function takes a string parameter of the path you set earlier for the placement sound ('./media/place.mp3')
function auto(audioURL) {
    //We create a new audio object and pass the path as a parameter.
    let audio = new Audio(audioURL);
    //play() method plays our audio sound.
    audio.play();
}
//This function utilizes HTML canvas to draw a win line.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
}
window.alert("Let's play Tic Tac Toe");
//This function parses the selectedSquares array to search for win conditions.
//drawline()function is called to draw a line on the screen if the condition is net.
function checkWinConditions() {
    //0X,1X,2X condition.
    if (arrayIncludes('0X', '1X', '2X' )){ drawWinLine(50, 100, 558, 100)}
     //X3,4X,5X condition.
    else if (arrayIncludes('3X', '4X', '5X' )){ drawWinLine(50, 304, 558, 304)}
     //6X,7X,8X condition.
    else if (arrayIncludes('6X', '7X', '8X' )){ drawWinLine(50, 508, 558, 508)}
     //X1,4X,7X condition.
    else if (arrayIncludes('1X', '4X', '7X' )){ drawWinLine(304, 50, 304, 558)}
    // X 1, 4, 7 condition.
    else if (arrayIncludes('0X', '3X', '6X' )){ drawWinLine(100, 50, 100, 558)}
     //6X,7X,8X condition.
    else if (arrayIncludes('2X', '5X', '8X' )){ drawWinLine(508, 50, 508, 558)}
     //X1,4X,7X condition.
    else if (arrayIncludes('6X', '4X', '2X' )){ drawWinLine(100, 508, 510, 90)}
         //X0,4X,8X condition.
     else if (arrayIncludes('0X', '4X', '8X' )){ drawWinLine(100, 100, 520, 520)}
         //O 0,1,2 condition.
    else if (arrayIncludes('0O', '1O', '2O' )){ drawWinLine(50, 100, 588, 100)}
         //O 3,4, 5 condition.
    else if (arrayIncludes('3O', '4O', '5O' )){ drawWinLine(50, 304, 558, 304)}
        // O 6,7,8 condition.
    else if (arrayIncludes('6O', '7O', '8O' )){ drawWinLine(50, 508, 558, 558)}
         //O 0,3,6 condition.
    else if (arrayIncludes('0O', '3O', '6O' )){ drawWinLine(100, 50, 100, 558)}
         //O 1,4,7 condition.
    else if (arrayIncludes('1O', '4O', '7O' )){ drawWinLine(304, 50, 304, 558)}
            // O 6,7,8 condition.
    else if (arrayIncludes('2O', '5O', '8O' )){ drawWinLine(508, 50, 508, 558)}
            //O 0,3,6 condition.
    else if (arrayIncludes('6O', '4O', '2O' )){ drawWinLine(100, 508, 510, 90)}
            //O 1,4,7 condition.
    else if (arrayIncludes('0O', '4O', '8O' )){ drawWinLine(100, 100, 520, 520)}
     //This condition checks for a tie. If none of the above conditions are met and 
     //9 squares are selected the code executes.
     else if (selectedSquares.length >= 9) {
        //THis function plays the tie game sound.
        new Audio('media/tie.mp3');
        //This function sets a.3 second timer befoer the restGame is called.
        setTimeout(function() {resetGame();}, 500);
    }
    //THis function checks if an array includes 3 strings. it is used to check for
    //each win condition.
    function arrayIncludes(squareA, sqaureB, sqaureC){
        //These 3 variables will be used to check for 3 in a row.
        const a =selectedSquares.includes(squareA)
        const b =selectedSquares.includes(sqaureB)
        const c =selectedSquares.includes(sqaureC)
//if the 3 variables we pass are all incloded in our array then
//true is returned and our else if condition executes the drawLine()function
if(a ===true && b === true && c ===true){return true;}
    } 
}
//this functionmake our body element temporarily unclickable.
function disableclick() {
    //This make our body unclickable.
    body.style.pointerEvents = 'none';
    //this  makes our body clickable again after 1 second
    setTimeout(function() {body.style.pointerEvents = 'auto'; }, 1000);
}
//this function take a string parammeter of the path you set earlier for
//placement sound('./media/place.mp3')
function audio(audioULR){
    //we creat a new aduio object and we pass the path as a parameter.
    let audio = new Audio(audioULR);
    //play method plays our audio sound.
    audio.play();
}
//This function utilizes HTML canvas to deaw win line.
function drawWinLine(coordX1, coordY1, coordX2, coordy2) {
    //this line accesses our HTML canvas element.
    const canvas = document.getElementById('win-lines');
    //this line give us  accse to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //This line indicates where the star of a line x axis is.
    let x1 = coordX1,
    //this line indicates where the star of a line y axis is.
    y1 =coordY1,
    //this line indicates where the end of a line x axis is.
    x2 = coordX2,
    //this line indicates where the end of a line y axis is.
    y2 = coordy2,
    //this variable store temporary x axis data we update in our animation loop.
    x =x1,
    //this variable store temporary y axis data we update in our animation loop.
    y = y1;
    //this function interacts with the canvas.
    function animateLineDrawing(){
        //thisvariable creates a loop
        const animationloop =requestAnimationFrame(animateLineDrawing);
        //thismethos clears the content form the last loop line.
        c.clearRect(0, 0, 608, 608);
        //This method starts a new path.
        c.beginPath();
        //this method  moves us to a starting pointin our line
        c.moveTo(x1, y1);
        //this method indicate the  end point in our line.
        c.lineTo(x, y);
        //this  method starts the width of our line
        c.lineWidth = 10;
        //This medthod set the color of our line
        c.strokeStyle ='rgba(70, 255, 33, .8)';
        //this medthod draws everything we laid out above
        c.stroke();
        //this condition checks if we have reached the endpoints
        if(x1 <= x2 && y1 <= y2){
            //this condition adds 10 to the previous end x endpoint.
            if (x < x2) {x += 10;}
            //this condition adds 10 to the previous end y endpoint.
              if (y < y2) {y += 10;}
            //This condition is smaller to the one above.
            //this is necessary for the 6,4,2 win condtion.
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationloop);}
            }
            //This condition is smaller to the one above.
            //this is necessary for the 6,4,2 win condtion.
            if (x1 <= x2 && y1 >= y2) {
                if(x < x2) {x += 10;}
                if(y > y2) {y -= 10;}
                if (x >= x2 && y <= y2) {cancelAnimationFrame(animationloop);}
            }
         }
         //This line disallows clicking while the win sound is playing
         function clear() {
            //This line stars our animation loop.
            const animationloop = requestAnimationFrame(clear);
            //This line clear our canvas
            c.clearRect(0, 0, 608, 608);
            //This line stops our animation loop.
            cancelAnimationFrame(animationloop);
        }
         //This line disallows Clicking while the win sound is playing.
         disableclick();
         //this linr plays the win sounds.
         audio('media/winGame.mp3');
         //This line calls our main animation loop
         animateLineDrawing();
         //This line waits 1 secon. then, clears, resets game, an allows clicking again
         setTimeout(function() { clear(); resetGame(); }, 1000);
        }
        //This function resets the game in the event of a tie or win.
        function resetGame(){
            //This for loop iterates through each HTML square element.
            for (let i =0; i < 9; i++){
                //This variable gets the HTML element i
                let square = document.getElementById(String(i));
                //This removes our elements backgroundimage
                square.style.backgroundImage ='';
            }
            //This resets our array so it is empty and we can start over.
            selectedSquares =[];
        }
        