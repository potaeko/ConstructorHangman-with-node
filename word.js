//inquirer.js nom,  provides the user interface and the inquiry session flow.
var inquirer = require('inquirer');
//Include letter module
var Letter = require('./letter');
//colors.js npm, get color and style in node.js console
var colors = require('colors');
//Make a red line in console
var line = colors.cyan("===========================================================================");
//New Word object.
var Word = function(){
    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
	this.play = play
}

function play(mainFunc){

	if ((mainFunc.choicesRemain!=0 && mainFunc.complete === false)){ 
		console.log('Your Word is : ' + mainFunc.currentWord.join(' '))

		inquirer.prompt([
		{
			type:'input',
			name:"guess",
			message:'Enter your Guess: '
		}
		]).then(function(uChoice){
			console.log("userguess: " + uChoice.guess)
			userGuess = uChoice.guess
			// Object constructor function that created the instance object 
			var letter = new Letter(userGuess);
			letter.checkLetter(mainFunc);

			//complete with correct answer
			if(mainFunc.currentWord.join('') === mainFunc.randomWord){
		        mainFunc.complete = true;
		        mainFunc.wins++;
		        mainFunc.printStats();
		        mainFunc.startGame();
		        return;     
			}
			//complete with wrong answer
		    else{
		    	mainFunc.complete= false;
		    	if (mainFunc.choicesRemain===0){
		    		console.log(colors.red("You are WRONG !!!"))
	    			console.log(colors.yellow("CORRECT word is: " + mainFunc.randomWord))
					console.log(line);	
		    		mainFunc.losses++;
		    		mainFunc.printStats();
		    		mainFunc.startGame();
		    		return;
		    	}
		    	play(mainFunc);        
		    };
		});
	};
};

module.exports = Word;