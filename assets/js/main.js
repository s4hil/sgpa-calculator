// Cycle buttons
let cBtn = document.getElementById("c-btn");
let pBtn = document.getElementById("p-btn");

cBtn.addEventListener('click', function () {
	document.getElementById("subject-2").textContent = "21CHE22";
	document.getElementById("subject-3").textContent = "21PSP23";
	document.getElementById("subject-4").textContent = "21ELN24";
	document.getElementById("subject-5").textContent = "21EME25";
	document.getElementById("subject-6").textContent = "21CHEL26";
	document.getElementById("subject-7").textContent = "21CPL27";
	document.getElementById("subject-8").textContent = "21EGH28";
	document.getElementById("subject-9").textContent = "21SFH29";
});
pBtn.addEventListener('click', function () {
	document.getElementById("subject-2").textContent = "21PHY22";
	document.getElementById("subject-3").textContent = "21ELE23";
	document.getElementById("subject-4").textContent = "21CIV24";
	document.getElementById("subject-5").textContent = "21EVLN25";
	document.getElementById("subject-6").textContent = "21PHYL26";
	document.getElementById("subject-7").textContent = "21ELEL27";
	document.getElementById("subject-8").textContent = "21EGH28";
	document.getElementById("subject-9").textContent = "21IDT29";
});

let btn = document.getElementById('btn');

let grade = "";

function calcGrade(marks) {
	if (marks >= 90 && marks <= 100) {
		grade = "S";
	}
	else if(marks >= 80 && marks < 90){
		grade = "A";
	}
	else if(marks >= 70 && marks < 80){
		grade = "B";
	}
	else if(marks >= 60 && marks < 70){
		grade = "C";
	}
	else if(marks >= 45 && marks < 60){
		grade = "D";
	}
	else if(marks >= 40 && marks < 45){
		grade = "E";
	}
	else if(marks >= 0 && marks < 40){
		grade = "F";
	}
	return grade;
}

function calcGradePoint(grade) {
	if (grade == "S") {
		gradePoint = 10;
	}
	else if(grade == "A"){
		gradePoint = 9;
	}
	else if(grade == "B"){
		gradePoint = 8;
	}
	else if(grade == "C"){
		gradePoint = 7;
	}
	else if(grade == "D"){
		gradePoint = 6;
	}
	else if(grade == "E"){
		gradePoint = 4;
	}
	else if(grade == "F"){
		gradePoint = 0;
	}
	return gradePoint;
}


let creditPointSum = 0;
let gradePointSum = 0;

btn.addEventListener('click', function (e) {
	e.preventDefault();
	let subs = document.querySelectorAll('.subject');
	for(let i = 0; i < subs.length; i++){
		let val = subs[i].value;
		let credit = parseInt(subs[i].getAttribute('credit'));
		let g = calcGrade(val);

		let gPoint = calcGradePoint(g);

		let cg = parseInt(credit) * parseInt(gPoint);

		creditPointSum += credit;
		gradePointSum += cg;

	}

	let sgpa = (gradePointSum/creditPointSum).toFixed(3);

	console.log(sgpa);
	
	let sgpaText = document.getElementById("calculated-sgpa");

	sgpaText.textContent = sgpa;

	creditPointSum = 0;
	gradePointSum = 0;

});