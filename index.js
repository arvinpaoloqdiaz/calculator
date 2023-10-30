// Selecting all elements and assigning variables for ease of access

let buttonNumbers = document.querySelectorAll(".btn-num");
let buttonOperators = document.querySelectorAll(".btn-oper");
let buttonChars = document.querySelectorAll(".btn-char");
let buttonHistories = document.querySelectorAll("btn-hist");
let calculator = document.getElementById("calcu");
let screen = document.getElementById("display");
let clearAll = document.getElementById("clear-all");
let deleteChar = document.getElementById("delete");
let calculate = document.getElementById("calculate");
let accumulator = "";
let histories = "";
let newAccumulator = "";

// click event listener for number buttons
buttonNumbers.forEach((button) => {
	button.addEventListener("click",(e) => {
		e.preventDefault();
		screen.value += button.textContent;
		accumulator += button.textContent;
		newAccumulator += button.textContent;
		console.log(accumulator);
	});
});

// click event listeners for operator buttons
buttonOperators.forEach((button) => {
	button.addEventListener("click",(e)=>{
		e.preventDefault();
		screen.value +=button.textContent;
		accumulator += button.value;
		newAccumulator += button.value;
		console.log(accumulator);
	});
}) ;

// click event listeners for special chars
buttonChars.forEach((button) => {
	button.addEventListener("click",(e)=>{
		e.preventDefault();
		screen.value += button.textContent;
		accumulator += button.textContent;
		newAccumulator += button.textContent;
		console.log(accumulator);
	});
});

// click event listener for AC button 
clearAll.addEventListener("click",(e)=>{
	e.preventDefault();
	screen.value = "";
	accumulator = "";
	newAccumulator = "";
	console.log(accumulator);
});

// click event listener for delete button
deleteChar.addEventListener("click",(e)=>{
	e.preventDefault();
	screen.value = screen.value.slice(0,-1);
	accumulator = accumulator.slice(0,-1);
	newAccumulator = newAccumulator.slice(0,-1);
	console.log(accumulator);
});

// click event listener for equal sign
calculate.addEventListener("click",(e)=>{
	e.preventDefault();
	addHistory(screen.value,eval(accumulator));
	try{
		screen.value = eval(accumulator).toString();
		console.log(accumulator);
		accumulator = eval(accumulator);
	} catch (error){
		screen.value = "Error";
	};
});

function addHistory(expr,ans){
	let historyList = document.getElementById("history-list")
	let newDiv = document.createElement("div");
	newDiv.classList.add("grid-template");
	let newPAcc = document.createElement("p")
	newPAcc.classList.add("display","acc")
	newPAcc.textContent= expr.toString();
	let newPEqual = document.createElement("p")
	newPEqual.classList.add("equal-sign-template")
	newPEqual.textContent="=";
	let newPAns = document.createElement("p")
	newPAns.classList.add("answer")
	newPAns.textContent=ans.toString();

	newDiv.appendChild(newPAcc);
	newDiv.appendChild(newPEqual);
	newDiv.appendChild(newPAns);
	historyList.appendChild(newDiv);

	newDiv.addEventListener("click",(e) => {
		e.preventDefault();
		screen.value = expr;
		accumulator= decode(expr);
		console.log(accumulator);
		calculator.scrollIntoView({behavior:"smooth"});
	});
};

let decoder = new Map([
	["+","+"],
	["−", "-"],
	["×","*"],
	["÷","/"]
]);

 function decode(expr){
 	let exprArray = Array.from(expr);
 	return exprArray.map(character =>{
 		return decoder.get(character) || character;
 	}).join("");
 };








