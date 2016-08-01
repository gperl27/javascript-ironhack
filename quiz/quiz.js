

var user = {};
var responses = [];

function question1() {
	var name = prompt("What is your name?");
	user.name = name;
}

function question2() {
	var firstQuestion = prompt("Is the grass green?");

	if(firstQuestion.toLowerCase() === "yes"){
		firstQuestion = true;
	} else if (firstQuestion.toLowerCase() === "no"){
		firstQuestion = false;
	} else {
		alert("Please answer either Yes or No");
		return question2();
	}
	responses.push(firstQuestion);
}

function question3() {
	var js = prompt("What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?");
	js = js.toLowerCase();

	switch (js) {
		case "java":
		case "javalive":
		case "scriptyscript":
			//alert("Not the right answer, please try again.");
			js = false;
			break;
		case "livescript":
			//alert("Correct!");
			js = true;
			break;
		default:
			alert("Please choose an answer");
			return question3();
	}
	responses.push(js);
}

function question4() {
	var math = prompt("Let's do some math. What is 2^5?");


	if (math === "32"){
		math = true;
	} else if (isNaN(parseInt(math))) {
		alert("Please enter a valid number.");
		return question4();
	} else {
		math = false;
	}
	responses.push(math);
}

function question5(){
	var answer = prompt("What is the name of the hockey team in South Florida?");

	if(answer.toLowerCase() === "florida panthers" || answer.toLowerCase() === "cats" || answer.toLowerCase() === "panthers"){
		answer = true;
	} else {
		answer = false;
	}
	responses.push(answer);
}

function evaluate(array){
	user.true = 0;
	user.false = 0;

	for(var i=0;i<array.length;i++){
		if(array[i] === true){
			user["true"]++;
		} else {
			user["false"]++;
		}
	}
	showResults();
}

function showResults() {
	alert(user.name + " , you got " + user.true + " right and " + user.false + " wrong.");
}


question1();
question2();
question3();
question4();
question5();

evaluate(responses);