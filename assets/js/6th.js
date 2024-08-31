
let btn = document.getElementById('btn');

let grade = "";

let sub_inps = document.querySelectorAll('.subject');
let prepends = document.querySelectorAll('.input-group-text');

for(let i=0; i < sub_inps.length; i++){
	let cred = sub_inps[i].getAttribute('credit');
	sub_inps[i].setAttribute('placeholder', "Credits: "+cred);
}

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