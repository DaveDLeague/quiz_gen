var qbody;
var qButts;
var qPanes;

var questions = [];

var idctr = 0;
var totalQuestions = 0;

function Question(){
	this.type;
	this.answerDiv;
	this.question;
	this.totalChoices;
	this.answer;
}

window.onload = function(){
	qbody = document.getElementById("questionBody");

	qPanes = document.createElement("div");
	qButts = document.createElement("div");
	qbody.appendChild(qPanes);
	qbody.appendChild(qButts);

	var mcButton = document.createElement("button");
	mcButton.innerHTML = "Add Multiple Answer Question";
	mcButton.onclick = addMultipleAnswerQuestion;
	
	var scButton = document.createElement("button");
	scButton.innerHTML = "Add Single Answer Question";
	scButton.onclick = addSingleAnswerQuestion;
	
	var fiButton = document.createElement("button");
	fiButton.innerHTML = "Add Fill-In Question";
	fiButton.onclick = addFillInQuestion;

	qButts.appendChild(mcButton);
	qButts.appendChild(scButton);
	qButts.appendChild(fiButton);
}

function rebuildEditor(){
	//qPanes.innerHTML = "";
}

function saveQuizState(){
	var tbxs = qPanes.getElementsByTagName("textarea");
	for(var i = 0; i < tbxs.length; i++){
		console.log(tbxs[i].id);
	}
}

function removeQuestion(number){
	saveQuizState();
}

function addChoice(qnum){	
	var q = questions[qnum];
	var dv = document.getElementById("answer" + qnum);
	var a = String.fromCharCode("A".charCodeAt(0) + q.totalChoices++);
	
	if(q.type == "MULT_ANS"){
		dv.innerHTML += a + " <input type='checkbox'></input>";
		dv.innerHTML += "<textarea id='q"+qnum+"a"+(q.totalChoices - 1)+"' rows='5' cols='40'></textarea>";
		dv.innerHTML += "<button onclick=''>x</button><br>";
	}else if(q.type == "SING_ANS"){
		dv.innerHTML += a + " <input type='radio' name='ans"+qnum+"'></input>";
		dv.innerHTML += "<textarea id='q"+qnum+"a"+(q.totalChoices - 1)+"' rows='5' cols='40'></textarea>";
		dv.innerHTML += "<button onclick=''>x</button><br>";
	}
}

function addMultipleAnswerQuestion(){
	var q = new Question();
	q.type = "MULT_ANS";
	q.totalChoices = 1;
	
	var qdiv = document.createElement("div");

	qdiv.id = "qdiv" + idctr++;
	qdiv.innerHTML = "Question " + ++totalQuestions + ": ";
	qdiv.innerHTML += "<button onclick='removeQuestion("+(totalQuestions - 1)+")'>remove</button><br>";
	qdiv.innerHTML += "<textarea id='q"+(totalQuestions - 1)+"' class='qbox' rows='10' cols='60'></textarea><br>";

	var adiv = document.createElement("div");
	adiv.id = "answer" + (totalQuestions - 1);

	adiv.innerHTML += "A <input type='checkbox'></input>";
	adiv.innerHTML += "<textarea id='q"+(totalQuestions - 1)+"a0' rows='5' cols='40'></textarea>";
	adiv.innerHTML += "<button onclick=''>x</button><br>";

		
	qdiv.appendChild(adiv);

	qdiv.innerHTML += "<button onclick='addChoice("+(totalQuestions - 1)+")'>add another choice</button><br>";
	qdiv.innerHTML += "<hr size='3'>";
	qPanes.appendChild(qdiv);

	questions.push(q);
}

function addSingleAnswerQuestion(){
	var q = new Question();
	q.type = "SING_ANS";
	q.totalChoices = 1;
	
	var qdiv = document.createElement("div");

	qdiv.id = "qdiv" + idctr++;
	qdiv.innerHTML = "Question " + ++totalQuestions + ": ";
	qdiv.innerHTML += "<button onclick='removeQuestion("+(totalQuestions - 1)+")'>remove</button><br>";
	qdiv.innerHTML += "<textarea id='q"+(totalQuestions - 1)+"' class='qbox' rows='10' cols='60'></textarea><br>";

	var adiv = document.createElement("div");
	adiv.id = "answer" + (totalQuestions - 1);

	adiv.innerHTML += "A <input type='radio' name='ans"+(totalQuestions - 1)+"'></input>";
	adiv.innerHTML += "<textarea id='q"+(totalQuestions - 1)+"a0' rows='5' cols='40'></textarea>";
	adiv.innerHTML += "<button onclick=''>x</button><br>";

		
	qdiv.appendChild(adiv);

	qdiv.innerHTML += "<button onclick='addChoice("+(totalQuestions - 1)+")'>add another choice</button><br>";
	qdiv.innerHTML += "<hr size='3'>";
	qPanes.appendChild(qdiv);

	questions.push(q);
}

function addFillInQuestion(){
	var q = new Question();
	q.type = "FILL_IN";
	
	var qdiv = document.createElement("div");

	qdiv.id = "qdiv" + idctr++;
	qdiv.innerHTML = "Question " + ++totalQuestions + ": ";
	qdiv.innerHTML += "<button onclick='removeQuestion("+(totalQuestions - 1)+")'>remove</button><br>";
	qdiv.innerHTML += "<textarea class='qbox' rows='10' cols='60'></textarea><br>";

	var adiv = document.createElement("div");
	adiv.id = "answer" + (totalQuestions - 1);

	adiv.innerHTML += "ANSWER <textarea rows='5' cols='40'></textarea>";

		
	qdiv.appendChild(adiv);

	qdiv.innerHTML += "<hr size='3'>";
	qPanes.appendChild(qdiv);

	questions.push(q);
}
	
