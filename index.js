// Selecting all elements and assigning variables for ease of access

let buttonNumbers = document.querySelectorAll(".btn-num");
let buttonOperators = document.querySelectorAll(".btn-oper");
let buttonChars = document.querySelectorAll(".btn-char");
let buttonHistories = document.querySelectorAll("btn-hist");
let screen = document.getElementById("display");
let clearAll = document.getElementById("clear-all");
let deleteChar = document.getElementById("delete");
let calculate = document.getElementById("calculate");
let accumulator = "";
let histories = "";

// click event listener for number buttons
buttonNumbers.forEach((button) => {
	button.addEventListener("click",(e) => {
		e.preventDefault();
		screen.value += button.textContent;
		accumulator += button.textContent;
		console.log(accumulator);
	});
});

// click event listeners for operator buttons
buttonOperators.forEach((button) => {
	button.addEventListener("click",(e)=>{
		e.preventDefault();
		screen.value +=button.textContent;
		accumulator += button.value;
		console.log(accumulator);
	});
}) ;

// click event listeners for special chars
buttonChars.forEach((button) => {
	button.addEventListener("click",(e)=>{
		e.preventDefault();
		screen.value += button.textContent;
		accumulator += button.textContent;
		console.log(accumulator);
	});
});

// click event listener for AC button 
clearAll.addEventListener("click",(e)=>{
	e.preventDefault();
	screen.value = "";
	accumulator = "";
	console.log(accumulator);
});

// click event listener for delete button
deleteChar.addEventListener("click",(e)=>{
	e.preventDefault();
	screen.value = screen.value.slice(0,-1);
	accumulator = accumulator.slice(0,-1);
	console.log(accumulator);
});

// click event listener for equal sign
calculate.addEventListener("click",(e)=>{
	e.preventDefault();
	addHistory(screen.value,eval(accumulator));
	try{
		screen.value = eval(accumulator);
		console.log(accumulator);
	} catch (error){
		screen.value = "Error";
	};
});

//click event listener for history tab
buttonHistories.forEach((button) => {
	button.addEventListener("click",(e)=>{
		e.preventDefault();
		screen.value = "HATDOG";
		console.log("test");
	});
});

function addHistory(expr,ans){
	histories += `
		<div class="grid-template btn-hist">
			<p class="display" id="acc">${expr}</p>
			<p class="equal-sign-template">=</p>
			<p class="answer">${ans}</p>
		</div>`
	document.querySelector("#history-list").innerHTML = histories;
};