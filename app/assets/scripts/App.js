var document = document.querySelector("html");
var inputNumber = document.querySelector("input[type='number']");
var submit = document.querySelector("input[type='submit']");

var randomNumber = Math.floor(Math.random() * 100);
var guessedNumber;

console.log(randomNumber);

submit.addEventListener("click", function(e)
{

	guessedNumber = inputNumber.value;

	if(guessedNumber < randomNumber)
	{
		alert("Too low, guess again");
		inputNumber.value = "";
	}
	else if(guessedNumber > randomNumber)
	{
		alert("Too high, guess again");
		inputNumber.value = "";
	}
	else
	{
		alert("You guessed right!");
	}

	e.preventDefault();

});