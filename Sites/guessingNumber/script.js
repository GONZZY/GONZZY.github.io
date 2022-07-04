let nbGuess = 0;
let gameOn = true;

var inputbutton = document.getElementById("inp");
var main1 = document.getElementById("main");
var resetButton = document.getElementById("RestartBtn");
inputbutton.addEventListener("keyup", (e) => {
	e.preventDefault();
	if (e.code == "Enter") {
		document.getElementById("btnSubmit").click();
	}
});
// This is a test
mystery = Math.floor(Math.random() * 100);

function Game() {
	var guess;
	if (nbGuess <= 10) {
		if (nbGuess == 0) {
			//document.getElementById("answer").innerHTML = mystery;
		}

		guess = document.getElementById("inp").value;

		ShowPrevious(guess);
		VerifyGuess(guess, mystery);
		++nbGuess;
		UpdateTries(nbGuess);
		if (nbGuess == 10 && gameOn == true) {
			var clue = document.getElementById("clue");
			clue.textContent =
				"Vous avez perdue, vous avez essayé " +
				nbGuess +
				" fois, mais vous ne l'avez pas trouvé !";
			EndGame();
		}
	}

	document.getElementById("inp").value = null;
}

function ShowPrevious(guess) {
	var previous = document.getElementById("previous");
	previous.innerHTML = previous.textContent + " " + guess;
}
function CheckGuess(guess) {
	guess = getElementById("inp").value;
}
function VerifyGuess(guess, mystery) {
	var result = document.getElementById("result");
	var clue = document.getElementById("clue");
	while (guess == "") {
		result.style.background = "none";
		result.textContent = null;
		clue.textContent = "Vous devez entrer un nombre!";
		CheckGuess(guess);
	}
	if (guess < mystery) {
		result.textContent = "Incorrect";
		result.style.background = "red";
		clue.textContent = "Trop bas!";
	} else if (guess > mystery) {
		result.textContent = "Incorrect";
		result.style.background = "red";
		clue.textContent = "Trop haut!";
	} else {
		result.textContent = "Correct!";
		result.style.background = "greenyellow";
		clue.textContent =
			"Vous avez eu la bonne réponse en " + (nbGuess + 1) + " essais !";
		EndGame();
	}
}

function EndGame() {
	document.getElementById("RestartBtn").focus;
	gameOn = false;
	var inputNb = document.getElementById("inp");
	inputNb.setAttribute("disabled", "");
	var inputBtn = document.getElementById("btnSubmit");
	inputBtn.setAttribute("disabled", "");
	ShowRstBtn();
}

function ShowRstBtn() {
	const restart = document.getElementById("RestartBtn");
	restart.style.display = "inline-block";
}

function Reset() {
	var inputNb = document.getElementById("inp");
	inputNb.removeAttribute("disabled");
	inputNb.value = null;
	var inputBtn = document.getElementById("btnSubmit");
	inputBtn.removeAttribute("disabled");
	const restart = document.getElementById("RestartBtn");
	restart.style.display = "none";
	result.textContent = "";
	clue.textContent = "";
	var previous = document.getElementById("previous");
	previous.innerHTML = "Previous Guesses: ";
	var tries = document.getElementById("tries");
	tries.textContent = "0/10";
	nbGuess = 0;
	gameOn = true;
	mystery = Math.floor(Math.random() * 100);
}

function UpdateTries(nbGuess) {
	var tries = document.getElementById("tries");
	tries.textContent = nbGuess + "/10";
}
