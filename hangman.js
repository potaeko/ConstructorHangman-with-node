// for creating user prompts define inquirer
var inquirer = require('inquirer');
var Word = require('./Word.js')
// for defining colors to the user input or output.
var colors = require('colors')
var line = colors.red("-------------------------------------------------------------");


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
		
		inquirer.prompt([
		{
			type:'confirm',
			name:"play",
			message:colors.yellow('Want to PLAY HANGMAN GAME-Food? '),
			default:true
		}
		])
		.then(function(answers){
			if (answers.play) {
				// getting a random word from Word constructor.
				mainFunc.randomWord=mainFunc.words[Math.floor(Math.random() * mainFunc.words.length)]
				mainFunc.choicesRemain = mainFunc.randomWord.length;
				for (var i=0; i< mainFunc.randomWord.length;i++){
				   	mainFunc.currentWord[i] = "_"
				}
		
				console.log(line)
				var game = new Word(mainFunc.randomWord);
				game.play(mainFunc);
			}
			else{
				console.log( " Thank you for your time");
			}
		})	
	}
}

var Hangman = new Hangman();
Hangman.startGame();