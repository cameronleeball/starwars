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
	var isEntered = false;
	
	var luke = {
		hp: 750,
		ap: 9,
		cp: 20
	};

	var obiwan = {
		hp: 500,
		ap: 11,
		cp: 25
	};

	var lando = {
		hp: 450,
		ap: 2,
		cp: 15
	};

	var jarjar = {
		hp: 300,
		ap: 5,
		cp: 5
	};

	var stormtroopers = {
		hp: 750,
		ap: 9,
		cp: 20
	};

	var obiwan = {
		hp: 500,
		ap: 11,
		cp: 25
	};

	var bfett = {
		hp: 450,
		ap: 2,
		cp: 15
	};

	var jarjar = {
		hp: 300,
		ap: 5,
		cp: 5
	};

	var $curChar = {
		hp: "",
		ap: "",
		cp: ""
	};

	var $enemy = {
		hp: "",
		ap: "",
		cp: ""
	};

	function selChar($curChar) {
		$(".char").click(function() {
			if (charIsSelected == false) {
				$curChar = eval($(this).attr("data-char"));
				charIsSelected = true;
				console.log($curChar);
				$("#char-hp").html($curChar.hp);
				$("#char-ap").html($curChar.ap);
				$("#char-cp").html($curChar.cp);
				$("#char-stat").show();
			}
			if (enemyIsSelected == false) {
				$(".enemy").show();
			}
		});	
	}

	function selEnemy($enemy) {
		// var enemies = [];
		$(".enemy").click(function() {
			if (enemyIsSelected == false) {
				$enemy = eval($(this).attr("data-char"));
				enemyIsSelected = true;
				console.log($enemy);
				$("#enemy-hp").html($enemy.hp);
				$("#enemy-ap").html($enemy.ap);
				$("#enemy-cp").html($enemy.cp);
				$("#enemy-stat").show();
			}
		});	
	}

	function fight(curHP) {
		curHP = (parseInt($curChar.hp))
	}

	function enter() {
		$(document).click(function() {
			$("#banner-image").hide();
			$("#splash").animate({'zoom': 1.5 }, 'slow');
			if (isEntered == false) {
				$("#splash").click(function() {
					$(".char").show();
					selChar();
					isEntered = true;
					selEnemy();
					fight();
				});
			}
		});
	}
	enter();
});







// function selChar() {

// }

// function 