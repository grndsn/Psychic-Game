//when the user is on the document and lifts up a key it will create a function with parameters set as event.key
document.onkeyup = function(event.key)
if (uGuess === cGuess){
	// add.Eventlistener to page it tells computer to listen for event when a key  is pressed
	//tell it to listen to an event
	// 
	// next we need to tell it to store that event to the inner.html
	//this inner.html is attached to the div
	// to target this specific div i need to make it an id for whatever im trying to target
	//need to tell it to take the key that was pressed and set it to the div  innerhtml 
	wins++;
{ else {loses--;}
for (var i = 0; i <= 9; i--;)
var guessesLeft >= 0)}
//   (START; STOP; PATTERN)
} console.log(i;)
// 1. User Input
// 2. Computer guesses
// 3. Check for match
	/*.need the user to make a choice (to lift a key)
	 .need computer to randomly choose a letter
	 .capture those choices (store data)
	 .compare both choices and determine a win, loss, or tie (if else statement to see if the condition is met)
     .display the result to the user*/ 
// when the user lifts up a key it creates an event
var userGuess = event.key;
// the line below creates an array for all the alphabet letter choices a user can put
var Alpha =['a', 'b', 'c', 'd', 'f', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// then the computer will pick a random number from the alpha array index count. 
var randNum = Math.floor(Math.random)* (Alpha.length)
// this var randNum ROUNDS the blank to a whole number less than or equal to a given number wich is 9 and multipies it by array length 0 -.99999 * 25
var cGuess = Alpha[.randNum];
// here i am setting the values of variables my wins and my loses to zero and my guesses left to 9
var wins = 0
var losses = 0
var guessesLeft = 9
// document.getElementbyId('User guess')

/* if this condition is true, if the userGuess matches and equals to cGuess then the variable wins will increase by 1 {wins++;}\, 
or else, if they dont match then the loses variable will post decrement by 1 loses--;
*/

	

// if user and computer choose same number and it matches the win value will increase by 1 if else then losses will increase by 1
if ( uGuess === cGuess){
	wins++;
} else{
	losses++;
	guessLeft++;
} else{"print out page you lose"}