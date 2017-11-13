var document = document.querySelector("html");
var inputNumber = document.querySelector("input[type='number']");
var submit = document.querySelector("input[type='submit']");
var instructions = document.querySelector(".instructions");
var guesses = document.querySelector(".guesses");
var messages = document.querySelector(".message");

var randomNumber;// = Math.floor(Math.random() * 100);
var guessedNumber;
var numOfGuesses;



initialize();

function initialize()
{

	//Setting up initial conditions
	resetTheGame();

	//Adding event listeners
	submit.addEventListener("click", function(e) {
		checkTheGuess();
		e.preventDefault();
	});
}

function resetTheGame()
{
	randomNumber = Math.floor(Math.random() * 100);
	numOfGuesses = 1;
	guesses.innerHTML = "";
	displayMessage("");
	clearInput();

	console.log(randomNumber);
}

function addInputToGuesses()
{
	guesses.innerHTML += " " + inputNumber.value;
}

function checkTheGuess()
{
	guessedNumber = inputNumber.value;

		if(guessedNumber < randomNumber)
		{
			incorrectGuess("Too Low");
		}
		else if(guessedNumber > randomNumber)
		{
			incorrectGuess("Too High");
		}
		else
		{
			correctGuess();
		}

		if(numOfGuesses === 10)
		{
			tooManyGuesses();
		}
		//console.log(this);
		//this.preventDefault();
}

function incorrectGuess(message)
{
	displayMessage(message);
	addInputToGuesses()
	numOfGuesses++;
	clearInput();
}

function correctGuess()
{
	alert("Correct!");
	resetTheGame();
}

function clearInput()
{
	inputNumber.value = "";
}

function displayMessage(message)
{
	messages.innerHTML = message;
}

function tooManyGuesses()
{
	alert("Too many guesses...\nChoosing new random number.");
	resetTheGame();
}