//inquirer.js npm, provides the user interface and the inquiry session flow.
var inquirer = require('inquirer');
//Include Word module
var Word = require('./word.js')
//colors.js npm, get color and style in node.js console
var colors = require('colors')
//Make a red line in console
var line = colors.red("-------------------------------------------------------------");
//Game Function
function Hangman(){
	var mainFunc = this;
	this.words = ["hamburger","pizza","orangechicken","shrimpfiredrice","macaroni","pho", "steak", "ribeyesteak", "porkchop", "sandwich", "teriyakichicken","springroll",'salmonsteak','sushi', 'topokki', 'ramen', 'instantnoodle','buffalowing' ],
	this.randomWord = [],
	this.currentWord = [],
	this.userGuess = [],
	this.choicesRemain = 0,
	this.wins=0,
	this.losses=0,
	this.complete=false,
	//function to print the results.
	this.printStats = function(){
		console.log(colors.yellow("  Here is your Score"+ "\n" ));
		console.log(colors.yellow("    Wins: "+ this.wins + "\n" ));
		console.log(colors.yellow("    Losses: "+ this.losses + "\n" ));
		console.log(line);
		return;
	}
	//start game function
	this.startGame = function (){
		this.randomWord =[];
		this.currentWord=[];
		this.userGuess=[];
		this.choicesRemain=0;
		this.complete=false;
		
		//inquirer.prompt(questions) Method
		inquirer.prompt([
		//more info : https://www.npmjs.com/package/inquirer#questions
		{	
			//(y/n)
			type:'confirm',
			//The name to use when storing the answer in the answers hash. If the name contains periods, it will define a path in the answers hash.
			name:"play",
			//The question to print. If defined as a function, the first parameter will be the current inquirer session answers. Defaults to the value of name (followed by a colon).
			message:colors.yellow('WANT TO PLAY HANGMAN GAME-FOOD? (Default:y) '),
			//Default value(s) to use if nothing is entered, or a function that returns the default value(s). If defined as a function, the first parameter will be the current inquirer session answers.
			default:true
		}
		])
		.then(function(answers){
			//if user choose y
			// getting a random word from Word constructor.
			if (answers.play) {
				mainFunc.randomWord=mainFunc.words[Math.floor(Math.random() * mainFunc.words.length)]
				mainFunc.choicesRemain = mainFunc.randomWord.length;
				//Show "_" for currentWord
				for (var i=0; i< mainFunc.randomWord.length;i++){
				   	mainFunc.currentWord[i] = "_"
				}
				//Show red line
				console.log(line)
				//Object constructor function that created the instance object
				var game = new Word(mainFunc.randomWord);
				game.play(mainFunc);
			}
			//if user choose n 
			else{
				console.log( " Thank you for your time!");
			}
		})	
	};
};

var Hangman = new Hangman();
Hangman.startGame();