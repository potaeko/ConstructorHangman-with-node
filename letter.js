// for defiing colors to the user input or output.
var colors = require('colors')
var line = colors.red("-------------------------------------------------------------");


var Letter = function(userGuess){
	this.guess = userGuess;
	this.cWord=[];
	this.compareWord = compareWord;
	this.checkLetter = checkLetter;
  	
}

module.exports = Letter;

function checkLetter(mainFunc){
	 
	 for (var i=0; i< mainFunc.randomWord.length;i++){
	 		this.cWord[i]=mainFunc.currentWord[i]
		}
		mainFunc.userGuess.push(this.guess);
		this.compareWord(this.guess, mainFunc)

}

function compareWord(letter, mainFunc){
		var validGuess=false;

		for (var i=0;i<mainFunc.randomWord.length;i++){
			if (letter.toLowerCase() === mainFunc.randomWord[i]){
				this.cWord[i] = mainFunc.randomWord[i];
				validGuess = true;
				mainFunc.currentWord = this.cWord;
			}
		}
		if (validGuess){
			console.log(line);
			console.log(colors.green("CORRECT !!!"))
			console.log("Your Word is: " + colors.yellow(mainFunc.currentWord.join(' ')))
			console.log("Your Guesses is: " + colors.yellow(mainFunc.userGuess))
			console.log(line);

		}
		else {
			--mainFunc.choicesRemain;
			console.log(line);
			console.log(colors.red("INCORRECT !!!"))
			console.log("Your Word is: " + colors.yellow(mainFunc.currentWord.join(' ')))
			console.log("Your Guesses: " + colors.yellow(mainFunc.userGuess))
			console.log(colors.green("Choices Remain: ") + mainFunc.choicesRemain );
			console.log(line);

		}

	} // function compareWord end.
