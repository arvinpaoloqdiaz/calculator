
<a name="readme-top"></a>

# Simple Calculator
This is a static webpage containing a [Simple Calculator](https://arvinpaoloqdiaz.github.io/calculator/) using purely `HTML`, `CSS`, and `JavaScript`.

There are two sections, the **Calculator** section, and the **History** section which will be collectively called the ***Main Content***.

This served as a practice for me to showcase what I learned in `HTML`, `CSS`, and `JavaScript`.
* `HTML` is used to add the elements in the webpage.
* `CSS` is used to style the elements and make it responsive to different screen sizes
* `JavaScript` is used to make the calculator's inner logic as well as the history section using **HTML DOM**.

## Calculator Section
The Calculator section works just like a calculator with the exception of the ***percentage (%)*** operator. 

Usually, this is a percentage operation, but in this case, we use the % operator for ***modulo operations***.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## History Section
The History section stores the expression as well as the answer when the ***equal (=)*** button is clicked. 

When the history section is clicked, the clicked expression will be called back to the screen and can be edited for another operation.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Responsiveness
The whole webpage is responsive to small, medium, and large screens

This is possible through the use of ***@media*** queries.

When the screen is medium and large, the calculator and history sections are inline.

When the screen is small, the calculator is above the history section.

The container for the calculator also becomes transparent and when you click an expression in the history section, it will scroll up back to the calculator section.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Code Discussion
This section will briefly discuss some code blocks in the HTML, CSS, and JavaScript files respectively.
<details>
<summary>HTML</summary>
	
### [calculator/index.html](./index.html)

**CSS** and **JS** files are linked externally:

Line 9:

```html
<link rel="stylesheet" type="text/css" href="./index.css">
```

Line 76:

```html
<script type="text/javascript" src="./index.js"></script>
```

A *div* element was created to contain the title header as well as both the calculator and the history sections.

Two more *div* elements are nested inside this to contain the title header and the main content. This will be cleared up in the **CSS Section** of the Code Discussion.

The second nested *div* contains a *form* element for the calculator, and another *div* for the history section

```html
<div class="content">
	<div id="calcu">
		<form>
		</form>
	</div>
	<div class="container">
		<div class="history">
		</div>
	</div>
</div>
```

*div* elements were further created to contain the screen and row buttons. Row buttons were individually created per row so that alignment in CSS will be simplified. Only operator buttons have value attributes as can be seen from the code since different symbol is used in the Javascript code.

A sample code block of one of the row button divs is shown below as well as the last row which is only the equal sign button

```html
<div>
	<button class="row-buttons btn-num">7</button>
	<button class="row-buttons btn-num">8</button>
	<button class="row-buttons btn-num">9</button>
	<button class="row-buttons btn-oper" value="*">&times;</button>
</div>
```
```html
<div>
	<button class="row-buttons-equals" id="calculate">&equals;</button>
</div>
```

Lastly, a *footer* element was added after the outermost *div* to serve as the footer of the webpage.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

</details>

<details>
	
<summary>CSS</summary>

### [calculator/index.css](./index.css)
Not all CSS properties will be shown, only important points in the code.

A CSS reset was initialized to ensure that there are no unneccessary margins or paddings.
```css
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
```
`.container` class was set to the div that contains the ***Main Content*** and this class was styled in a way that the sections will wrap when the screen is small but will be inline when the view width has sufficient space

```css
.container{
	display:flex;
	flex-wrap: wrap;
	justify-content: center;
}
```
In the history section, the contents are added using JavaScript via HTML DOM. The JavaScript adds a code block everytime the equal sign button is pressed as is styled as follows:
```css
.grid-template {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-template-areas:"accumulator accumulator" "equal-sign calculated";
	font-family: "Chakra Petch",sans-serif;
	font-size: 2.5vh;
	padding:0.5rem;
	margin:0;
}
.grid-template:hover{
	background:rgba(0,0,0,0.1);
	border-radius: 10px;
}
```
The `.grid-template` class is the container of each of the history entries. It specicifies a certain style for each of its children elements using *CSS Grid*. The `.grid-template` psudo-class `:hover` is also used to so that the user will know what part of the history list is going to be clicked on.
```css
.display {
	grid-area:accumulator;
	text-align: right;
}
.equal-sign-template{
	grid-area:equal-sign;
	text-align: left;
}
.answer{
	grid-area:calculated;
	text-align: right;
}
```
`.display` class is where the expression is going to be displayed. It will be aligned to the right of the section.

`.equal-sign-template` class is just an equal sign at the left side of the second row of each history entry.

`.answer` class is where the answer to the expression will be displayed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

</details>

<details>
<summary>JavaScript</summary>
	
### [calculator/index.js](./index.js)

Majority of the JavaScript code used is **HTML DOM**.

`document.querySelectorAll()` and `document.getElementById()` methods were used to call the elements and stored in variables for readability of code. A variable is also initiated globally that will be used in event listeners as accumulator
```javascript
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
```
Event Listeners are created for each of the buttons in the calculator section.

Multiple event listeners were created that each appends its content to the display screen in the calculator section when clicked.

They are grouped based on their function as follows:
|variable|Method used|description|
|---|---|---|
|buttonNumbers|`.querySelectorAll()`|numbers on the calculator|
|buttonOperators|`.querySelectorAll()`|operators including modulo, excluding equal sign|
|buttonChars|`.querySelectorAll()`|decimal point and paretheses|
|clearAll|`.getElementById()`|AC button to clear the screen as well as the accumulator|
|deleteChar|`.getElementById()`|deletes the last character entered in the expression|
|calculate|`.getElementById()`|evaluates the current expression that is on the screen|

Here is a code block for the equal sign button.

```js
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
```
`eval()` function is used to evaluate the current expression from the accumulator and displays it in the screen.

When the equal sign button is clicked, `addHistory()` function is invoked and will append a code block in the history.
```js
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
```
The `addHistory()` function appends the following code block as a children of the `<div class="history-list">`.
```html
<div class="grid-template">
	<p class="display acc">expr.toString()</p>
	<p class="equal-sign-template">=</p>
	<p class="answer">ans.toString()</p>
</div>
```
An event listener is also created per appended code block that listens for a click that will call the expression to the display screen. For a smaller screen, the screen will auto-scroll to the display screen of the calculator when a history entry is clicked.
```js
newDiv.addEventListener("click",(e) => {
	e.preventDefault();
	screen.value = expr;
	accumulator= decode(expr);
	console.log(accumulator);
	calculator.scrollIntoView({behavior:"smooth"});
```
As can be seen in the code block above, a `decode()` function is invoked and stored in the accumulator. The decode function can be seen below.
```js
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
```
When the `decode()` funtion is not invoked on the accumulator, it will return an error since `eval()` function does not recognize special html characters like &plus;, &minus;, &times;, and &divide; so it needs to be converted to operations recognized by JavaScript through the use of `map()` method.

</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

- [x] Calculator Section
- [x] History Section
- [x] Responsiveness
- [x] Clickable History List
- [ ] Error detection in Calculations with appropriate displays
- [ ] Accumulator type calculator
- [ ] More operations (Scientific calculator)
- [ ] Saveable History (using databases)
- [ ] Rework responsive for calculator section

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Conclusion

The simple calculator is a good way to showcase the ability and mastery of `HTML`, `CSS`, and `JavaScript`. This project is now functional but there are still a few kinks.

In my opinion, I think I need to improve my coding ability by taking advantage of **semantic html** as it was not heavily taken advantage of in this project. I also think there are simpler ways to execute the webpage which I might do in the future. 

CSS styling was also a bit tricky here specially the alignment of elements as I was still not quite familiar with *flex* and *grid* displays that much. Nevertheless, alignments were solved but still proved to be quite the challenge.

The use of other tools like frameworks or libraries are also possible in the future.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


