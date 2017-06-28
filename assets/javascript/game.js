alert("this is a test alert");
// this makes a pop up saying this is test alert!

// when the user lifts up a key it creates an event for the function
document.onkeyup = function(){
	alert('working!');
}
// 1. User Input
// 2. Computer guesses
// 3. Check for match

// when the user lifts up a key it creates an event
/*var uGuess = event.key;
// the line below creates an array for all the alphabet letter choices a user can put
var Alpha =['a', 'b', 'c', 'd', 'f', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// this line is telling the computer to pick a random number from the array Alpha
var randNum = Math.floor(Math.random)* Alpha.length
// this var randNum ROUNDS the largest interger less than or equal to a given number and multipies it by array length
var cGuess = Alpha[.randNum];2
// this line */

// if user and computer choose same number and it matches the win value will increase by 1 if else then losses will increase by 1
/*if ( uGuess === cGuess){
	wins++;
} else{
	losses++;
	guessLeft--;
} else{"print out page you lose"}