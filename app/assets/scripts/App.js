var document = document.querySelector("html");
var inputNumber = document.querySelector("input[type='number']");
var submit = document.querySelector("input[type='submit']");
var instructions = document.querySelector(".instructions");
var guesses = document.querySelector(".guesses");

var randomNumber;// = Math.floor(Math.random() * 100);
var guessedNumber;
var numOfGuesses;



initialize();

function initialize()
{

	//Setting up initial conditions
	reset();

	//Adding event listeners
	submit.addEventListener("click", function(e)
	{

		guessedNumber = inputNumber.value;

		if(guessedNumber < randomNumber)
		{
			alert("Too low, guess again");
			addInputToGuesses()
			numOfGuesses++;
			clearInput();
		}
		else if(guessedNumber > randomNumber)
		{
			alert("Too high, guess again");
			addInputToGuesses();
			numOfGuesses++;
			clearInput();
		}
		else
		{
			alert("You guessed right!");
			reset();
		}

		e.preventDefault();

	});
}

function reset()
{
	randomNumber = Math.floor(Math.random() * 100);
	numOfGuesses = 0;
	guesses.innerHTML = "";
	clearInput();

	console.log(randomNumber);
}

function addInputToGuesses()
{
	guesses.innerHTML += " " + inputNumber.value;
}

function clearInput()
{
	inputNumber.value = "";
}

