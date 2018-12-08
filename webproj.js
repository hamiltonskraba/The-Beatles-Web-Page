var help = {
	album: "Help!",
	year: "Aug. 1965",
	songs: [
	  	{"title": "Help!", "author": "John"},
	    {"title": "The Night Before", "author": "Paul"},
	    {"title": "You've Got to Hide Your Love Away", "author": "John"},
	    {"title": "I Need You", "author": "George"},
	    {"title": "Another Girl", "author": "Paul"},
	    {"title": "You're Going to Lose That Girl", "author": "John"},
	    {"title": "Ticket to Ride", "author": "John"},
	    {"title": "Yesterday", "author": "Paul"},
	    {"title": "I've Just Seen a Face", "author": "Paul"},
	    {"title": "It's Only Love", "author": "John"},
	    {"title": "Act Naturally", "author": "Ringo"}
	    ]
	};

var rubsoul = {
	album: "Rubber Soul",
	year: "Dec. 1965",
	songs: [
		{"title": "Drive My Car", "author": "Paul"},
		{"title": "Norwegian Wood", "author": "John"},
		{"title": "You Won't See Me", "author": "Paul"},
		{"title": "Nowhere Man", "author": "John"},
		{"title": "Think For Yourself", "author": "George"},
		{"title": "The Word", "author": "John"},
		{"title": "What Goes On", "author": "Ringo"},
		{"title": "Girl", "author": "John"},
		{"title": "I'm Looking Through You", "author": "Paul"},
		{"title": "In My Life", "author": "John"},
		{"title": "If I Needed Someone", "author": "George"},
		{"title": "Run For Your Life", "author": "John"},
	]
};

var rev = {
	album: "Revolver",
	year: "Aug. 1966",
	songs: [
		{"title": "Taxman", "author": "George"},
		{"title": "I'm Only Sleeping", "author": "John"},
		{"title": "Love You To", "author": "George"},
		{"title": "Here, There, and Everywhere", "author": "Paul"},
		{"title": "Yellow Submarine", "author": "Ringo"},
		{"title": "Good Day Sunshine", "author": "Paul"},
		{"title": "And Your Bird Can Sing", "author": "John"},
		{"title": "For No One", "author": "Paul"},
		{"title": "Doctor Robert", "author": "John"},
		{"title": "I Want to Tell You", "author": "George"},
		{"title": "Got to Get You into My Life", "author": "Paul"},
		{"title": "Tomorrow Never Knows", "author": "John"},
	]
};

var abbyrd = {
	album: "Abbey Road",
	year: "Sep. 1969",
	songs: [
	  	{"title": "Come Together", "author": "John"},
	    {"title": "Something", "author": "George"},
	    {"title": "Maxwell's Silver Hammer", "author": "Paul"},
	    {"title": "Oh! Darling", "author": "Paul"},
	    {"title": "Octopus's Garden", "author": "Ringo"},
	    {"title": "I Want You (She's So Heavy)", "author": "John"},
	    {"title": "Here Comes the Sun", "author": "George"},
	    {"title": "Because", "author": "John"},
	    {"title": "You Never Give Me Your Money", "author": "Paul"},
	    {"title": "Sun King", "author": "John"},
	    {"title": "Mean Mr. Mustard", "author": "John"},
	    {"title": "Polythene Pam", "author": "John"},
	    {"title": "She Came Into the Bathroom Window", "author": "Paul"},
	    {"title": "Golden Slumbers", "author": "Paul"},
	    {"title": "Carry That Weight", "author": "Paul"},	    	    
	    ]
  	};


/*album sort button*/
$(document).ready(function(event) {
	$("#album-submit").click(function(event) {
		$("#results").empty();
		$("#albumYear").empty();
		var results = albumResults();
		var year = titleYear();
		$("#albumYear").append("<h2>" + year + "</h2>")
		for (var i = 0; i < results.length; i++) {
			$("#results").append("<li>" + results[i] + "</li>");
		}
	});

});

/*author sort button*/
$(document).ready(function(event) {
	$("#author-submit").click(function(event) {
		$("#results").empty();
		$("#albumYear").empty();
		var results = authorResults();
		var year = titleYear();
		$("#albumYear").append("<h2>" + year + "</h2>")
		for (var i = 0; i < results.length; i++) {
			$("#results").append("<li>" + results[i] + "</li>");
		}
	});

});

/*helper album function*/
function albumSort () {
	var value = $("select#albumName").val();
	return value;
}

/*helper author function*/
function authorSort() {
	var value = $("select#authorName").val();
	return value;
}

/*define album selection*/
function albumResults() {
	var results = [];

	if (albumSort() === "help") {
		for(var i = 0; i < help.songs.length; i++) {
			results[i] = ("\"" + help.songs[i].title + "\"" + " written by " + help.songs[i].author + "\n");
		}
	}

	if (albumSort() === "abbyrd") {
		for(var i = 0; i < abbyrd.songs.length; i++) {
			results[i] = ("\"" + abbyrd.songs[i].title + "\""  + " written by " + abbyrd.songs[i].author + "\n");
		}
	}	

	if (albumSort() === "rubsoul") {
		for(var i = 0; i < rubsoul.songs.length; i++) {
			results[i] = ("\"" + rubsoul.songs[i].title + "\""  + " written by " + rubsoul.songs[i].author + "\n");
		}
	}	

	if (albumSort() === "rev") {
		for(var i = 0; i < rev.songs.length; i++) {
			results[i] = ("\"" + rev.songs[i].title + "\""  + " written by " + rev.songs[i].author + "\n");
		}
	}	

	return results;
}

/*define author selection*/
function authorResults() {
	var results = albumResults();
	var results2 = [];

	if (authorSort() === "none") {
		for(var i = 0; i < results.length; i++){
			results2.push(results[i]);
		}
	}

	else if (authorSort() === "john") {
		for(var i = 0; i < results.length; i++){
			if(results[i].indexOf("John") !== -1) {
				results2.push(results[i]);
			}
		}
	}

	else if (authorSort() === "paul") {
		for(var i = 0; i < results.length; i++){
			if(results[i].indexOf("Paul") !== -1) {
				results2.push(results[i]);
			}
		}
	}

	else if (authorSort() === "george") {
		for(var i = 0; i < results.length; i++){
			if(results[i].indexOf("George") !== -1) {
				results2.push(results[i]);
			}
		}
	}

	else if (authorSort() === "ringo") {
		for(var i = 0; i < results.length; i++){
			if(results[i].indexOf("Ringo") !== -1) {
				results2.push(results[i]);
			}
		}
	}				

	return results2;
}

/*generate chosen album title/year*/
function titleYear() {
	var titleYear = "";

	if(albumSort() === "help") {
		titleYear += help.album + " - " + help.year;
	}

	else if(albumSort() === "rubsoul") {
		titleYear += rubsoul.album + " - " + rubsoul.year;
	}

	else if(albumSort() === "abbyrd") {
		titleYear += abbyrd.album + " - " + abbyrd.year;
	}		

	else if(albumSort() === "rev") {
		titleYear += rev.album + " - " + rev.year;
	}			

	return titleYear;
}

/*blink disclaimer*/
$('#disclaimer').fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });





