# Simple Calculator
This is a static webpage containing a simple calculator using purely HTML, CSS, and JavaScript.

There are two sections, the **Calculator** section, and the **History** section which will be collectively called the ***Main Content***.

## Calculator Section
The Calculator section works just like a calculator with the exception of the ***percentage (%)*** operator. 

Usually, this is a percentage operation, but in this case, we use the % operator for modulo operations.

## History Section
The History section stores the expression as well as the answer when the ***equal (=)*** button is clicked. 

When the history section is clicked, the clicked expression will be called back to the screen and can be edited for another operation.

## Responsiveness
The whole webpage is responsive to small, medium, and large screens

This is possible through the use of ***@media*** queries.

When the screen is medium and large, the calculator and history sections are inline.

When the screen is small, the calculator is above the history section.

The container for the calculator also becomes transparent and when you click an expression in the history section, it will scroll up back to the calculator section.

## Code Discussion
This section will briefly discuss some code blocks in the HTML, CSS, and JavaScript files respectively.
### HTML
**CSS** and **JS** files are linked externally:

Line 9:

        <link rel="stylesheet" type="text/css" href="./index.css">

Line 76:

        <script type="text/javascript" src="./index.js"></script>

A *div* element was created to contain the title header as well as both the calculator and the history sections.
      
        <div class="content"><div>
        
Two more *div* elements are nested inside this to contain the title header and the main content. This will be cleared up in the **CSS Section** of the Code Discussion.

        <div class="content">
	        <div id="calcu"></div>
	        <div class="container"></div>
        </div>

The second nested *div* contains a *form* element for the calculator, and another *div* for the history section

        <div class="content">
	        <div id="calcu">
          <form></form>
          </div>
	        <div class="container">
          <div class="history"></div>
          </div>
        </div>
*div* elements were further created to contain the screen and row buttons. Row buttons were individually created per row so that alignment in CSS will be simplified. Only operator buttons have value attributes as can be seen from the code since different symbol is used in the Javascript code.

A *footer* element was added after the outermost *div* to serve as the footer of the webpage.

### CSS

### Javascript


