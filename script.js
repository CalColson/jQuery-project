var input = "<div class='square'></div>";
var input2 = "<div class='square2'></div>";
var input3 = "<div class='square3'></div>";
var size = 4;

var makeGrid = function(putter) {
	for (var i = 0; i < size; i++) {
		for (var j = 0; j < size; j++) {
			$('div.container').append(putter);
	}
		$('div.container').append('<br/>');
		
	}
};

var delGrid = function() {
	$('div.container').empty();
}

$(document).ready(function() {
	makeGrid(input);
	
	$('div.square').on('mouseenter', function() {
		$(this).css('background-color','blue');
	});	
	
	$('input#clear').click(function() {
		$('div.square').css('background-color', 'red');
		size = parseInt(prompt("How big do you want your grid to be (x by x)"));
		delGrid();
		if (size <= 29) {
		makeGrid(input);
		}
		else if (size <= 57) {
			makeGrid(input2);
		}
		else if (size <= 105) {
			makeGrid(input3);
		}
		else {
			alert("Size too large to handle");
		}
		$('div.square, div.square2, div.square3').on('mouseenter', function() {
		$(this).css('background-color','blue');
	});	
	});
	
	
});