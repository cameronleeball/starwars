/*Star Wars Card Fighting Game*/


//Choose Character

$(document).ready(function() {
	var theme = new Audio();
	theme.addEventListener('loadeddata', function() {
		loaded = true;
		theme.play();
	}, false);
	theme.src = 'assets/audio/theme.mp3';

	var charIsSelected = false;
	var enemyIsSelected = false;
	var fighting = false;
	var isEntered = false;
	var charAlive = true;
	var enemyAlive = true;
	var allEnDead = false;
	var firstStrike = true;
	var enFirstStrike = true;
	var characters = { 

		luke: {
			name: "Luke Skywalker",
			hp: 750,
			ap: 9,
			cp: 20
		},

		obiwan: {
			name: "Obi-Wan Kenobi",
			hp: 500,
			ap: 11,
			cp: 25
		},

		lando: {
			name: "Lando Calrissian",
			hp: 450,
			ap: 2,
			cp: 15
		},

		jarjar: {
			name: "Jar Jar Binks",
			hp: 300,
			ap: 5,
			cp: 5
		},

		stormtroopers: {
			name: "Squad of Stormtroopers",
			hp: 750,
			ap: 9,
			cp: 20
		},

		palpatine: {
			name: "Emperor Palpatine",
			hp: 500,
			ap: 11,
			cp: 25
		},

		bfett: {
			name: "Boba Fett",
			hp: 450,
			ap: 2,
			cp: 15
		},

		eviljarjar: {
			name: "Evil Jar Jar Binks",
			hp: 300,
			ap: 5,
			cp: 5
		},

		curChar: {
			name: "",
			hp: 0,
			ap: 0,
			cp: 0
		},

		enemy: {
			name: "",
			hp: 0,
			ap: 0,
			cp: 0
		},

		curHP: 0,
		curAP: 0,
		enemyHP: 0,
		enemyAP: 0
	};


	function selChar() {
		$(".char").click(function() {
			if (charIsSelected == false) {
				characters.curChar = characters[$(this).attr("data-char")];
				charIsSelected = true;
				console.log(characters.curChar);
				characters.curHP = characters.curChar.hp;
				characters.curAP = characters.curChar.ap;
				console.log(characters.curHP);
				console.log(characters.curAP);
				$("#char-hp").html(characters.curHP);
				$("#char-ap").html(characters.curAP);
				$("#char-cp").html(characters.curChar.cp);
				$("#char-stat").show();
			}
			if (enemyIsSelected == false) {
				$(".enemy").show();
			}
		});	
	}

	function selEnemy() {
		$(".enemy").click(function() {
			if (enemyIsSelected == false) {
				characters.enemy = characters[$(this).attr("data-char")];
				enemyIsSelected = true;
				enemyAlive = true;
				console.log(characters.enemy);
				characters.enemyHP = characters.enemy.hp;
				characters.enemyAP = characters.enemy.ap;
				console.log(characters.enemyHP);
				console.log(characters.enemyAP);
				$("#enemy-hp").html(characters.enemy.hp);
				$("#enemy-ap").html(characters.enemy.ap);
				$("#enemy-cp").html(characters.enemy.cp);
				$("#enemy-stat").show();
				$("#attack-btn").show();
			}
		});	
	}

	function checkHealth() {
		if (characters.curHP < 0) {
			charAlive = false;
		}
		else if (characters.enemyHP < 0) {
			enemyAlive = false;
		}
	}

	function attack() {
		$("#attack-btn").click(function() {	
			checkHealth();
			if ((firstStrike == true) && (charAlive == true) && (enemyAlive == true)) {
				alert("Attacking!");
				characters.curAP = (characters.curChar.ap + characters.curChar.ap);
				characters.enemyHP = (characters.enemy.hp - characters.curAP);
				$("#char-hp").html(characters.curHP);
				$("#char-ap").html(characters.curAP);
				$("#enemy-hp").html(characters.enemyHP);
				$("#enemy-ap").html(characters.enemyAP);
				console.log("Character Attacks");
				console.log("Character AP: " + characters.curAP);
				console.log("Enemy HP: " + characters.enemyHP);
				firstStrike = false; 
			}

			else if ((firstStrike == false) && (charAlive == true) && (enemyAlive == true)) {
				characters.curAP = (characters.curAP + characters.curChar.ap);
				characters.enemyHP = (characters.enemyHP - characters.curAP);
				$("#char-hp").html(characters.curHP);
				$("#char-ap").html(characters.curAP);
				$("#enemy-hp").html(characters.enemyHP);
				$("#enemy-ap").html(characters.enemyAP);
				console.log("Character Attacks");
				console.log("Character AP: " + characters.curAP);
				console.log("Enemy HP: " + characters.enemyHP);
			}
			else if ((charAlive == true) && (enemyAlive == false)) {	
				alert(characters.enemy.name + " has been defeated!");
				hideEnemy();
				enemyIsSelected = false;
				selEnemy();
				fight();
			}
			enemyCounter();
		});
	}


	function enemyAttack() {
		checkHealth();
		if ((enFirstStrike == true) && (charAlive == true) && (enemyAlive == true)) {
			alert(characters.enemy.name + " is attacking!");
			characters.enemyAP = (characters.enemy.ap + characters.enemy.ap);
			characters.curHP = (characters.curHP - characters.enemyAP);
			$("#char-hp").html(characters.curHP);
			$("#char-ap").html(characters.curAP);
			$("#enemy-hp").html(characters.enemyHP);
			$("#enemy-ap").html(characters.enemyAP);
			console.log("Enemy Attacks");
			console.log("Character HP: " + characters.curHP);
			console.log("Enemy AP: " + characters.curAP);
			console.log("Enemy HP: " + characters.enemyHP);
			enFirstStrike = false;
		}

		else if ((enFirstStrike == false) && (charAlive == true) && (enemyAlive == true)) {
			alert(characters.enemy.name + " is attacking!");
			characters.enemyAP = (characters.enemyAP + characters.enemy.ap);
			characters.curHP = (characters.curHP - characters.enemyAP);
			$("#char-hp").html(characters.curHP);
			$("#char-ap").html(characters.curAP);
			$("#enemy-hp").html(characters.enemyHP);
			$("#enemy-ap").html(characters.enemyAP);
			console.log("Enemy Attacks");
			console.log("Character HP: " + characters.curHP);
			console.log("Enemy AP: " + characters.curAP);
			console.log("Enemy HP: " + characters.enemyHP);
		}

		else if ((charAlive == false) && (enemyAlive == true)) {
			alert(characters.curChar.name + " has been defeated! The Dark Side was too strong this time!");
			if (confirm("Play Again?")) {
				game();
			}
			else {
				alert("Game Over");
			}
		}
	}

	function enemyCounter() {
		checkHealth();
		if ((charAlive == true) && (enemyAlive == true)) {
			alert(characters.enemy.name + " counters!");
			characters.curHP = (characters.curHP - characters.enemy.cp);
			$("#char-hp").html(characters.curHP);
			$("#char-ap").html(characters.curAP);
			$("#enemy-hp").html(characters.enemyHP);
			$("#enemy-ap").html(characters.enemyAP);
			console.log("Enemy Counters");
			console.log(characters.curHP);
			console.log(characters.curAP);
			console.log(characters.enemyHP);
			enemyAttack();
		}
	}

	function charCounter() {
		checkHealth();
		if ((charAlive == true) && (enemyAlive == true)) {
			alert("Counter-attack!");
			characters.enemyHP = (characters.enemyHP - characters.curChar.cp);
			$("#char-hp").html(characters.curHP);
			$("#char-ap").html(characters.curAP);
			$("#enemy-hp").html(characters.enemyHP);
			$("#enemy-ap").html(characters.enemyAP);
			console.log("Character Counters");
			console.log(characters.curHP);
			console.log(characters.curAP);
			console.log(characters.enemyHP);
			attack();
		}
	}

	function hideEnemy() {
		if (characters.enemy.name == "Squad of Stormtroopers") {
			$("#stormtroopers").hide();
		}
		else if (characters.enemy.name == "Boba Fett") {
			$("#bfett").hide();
		}
		else if (characters.enemy.name == "Emperor Palpatine") {
			$("#palpatine").hide();
		} 
		else if (characters.enemy.name == "Evil Jar Jar Binks") {
			$("#eviljarjar").hide();
		}
	}


	function fight() {
		attack();
	}

	function game() {
		$("#splash").animate({'zoom': 1.60 }, 'slow');
		if (isEntered == false) {
			$("#splash").click(function() {
				$(".char").show();

			});
		}
		selChar();
		isEntered = true;
		selEnemy();
		fight();
	}

	function enter() {
		$(document).click(function() {
			$("#banner-image").hide();
			game();
		});

	}
	enter();
});

