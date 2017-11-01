// for creating user prompts define inquirer
var inquirer = require('inquirer');
var Letter = require('./Letter');
// for defiing colors to the user input or output.
var colors = require('colors')
var line = colors.cyan("===========================================================================");

//New word object.
var Word = function(wrd){
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
			var letter = new Letter(userGuess);
			letter.checkLetter(mainFunc);

			if(mainFunc.currentWord.join('') === mainFunc.randomWord){
		        mainFunc.complete = true;
		        mainFunc.wins++;
		        mainFunc.printStats();
		        mainFunc.startGame();
		        return;     
		    }
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
		    }
			
		})
	}

}

module.exports = Word;