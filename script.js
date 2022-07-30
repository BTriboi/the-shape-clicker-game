// Objects, arrays
translateRandom = {
    x: Math.random() * 100,
    y: Math.random() * 100,
}

const shapeRandomColor = ['green','red','yellow','blue', 'orange'];

const bodyRandomColor = ['rgb(0,255,0,0.05)','rgb(255,0,0,0.05)','rgb(0,0,255,0.05)','rgb(0,0,0,0.05)']

const randomShapeBorder = ['1000px','0px'];


// --------------------- Functionality ------------------

// Simple counter variable to keep track of how many clicks have been made
let recordCounter = 0;

// Variable for the time it took to get the shape clicked on 10 times;
// ++ the selector for html element where this result will be displayed
const tenTapsElement = document.querySelector("#tenTaps-result");
let timeSum = 0;
// another counter to keep the other going while this is reset
let recordCounterToReset = 0;



// shape declaration selector

let shape = document.querySelector("#shape");


// Unumbered list with the elements that appear after recording the time on click

let timeList = document.querySelector("#time-list");


// Variables with randomizers of above ˆˆˆˆ in them

let randomColor = Math.floor(Math.random() * shapeRandomColor.length);

let randomShape = Math.floor(Math.random()* randomShapeBorder.length);

let randomBodyColor = Math.floor(Math.random()* bodyRandomColor.length);


// body selector for some customization inside the function on click

let body = document.querySelector("body");


// Getting random position of shape on each time page loads
shape.style.right = `${translateRandom.x}%`;
shape.style.top = `${translateRandom.y}%`;


//Random color on load and reload
shape.style.backgroundColor = shapeRandomColor[randomColor];


//Random shape on load and reload
shape.style.borderRadius = randomShapeBorder[randomShape];


// Click event on shape that changes the random positions on every click + fetches the timer value, displays it on the screen and resets it after that
shape.addEventListener("click", () => {

    shape.style.transition = "all 500ms"
    body.style.transition = "all 500ms"


    // randomize shape position
    translateRandom.x = Math.random() * 100;
    translateRandom.y = Math.random() * 100;
    
    shape.style.right = `${translateRandom.x}%`;
    shape.style.top = `${translateRandom.y}%`;

    
    // randomize shape background color
    randomColor = Math.floor(Math.random() * shapeRandomColor.length);
    
    shape.style.backgroundColor = shapeRandomColor[randomColor];

    // +++ body color change onclick

    randomBodyColor = Math.floor(Math.random()* bodyRandomColor.length);
    body.style.backgroundColor = bodyRandomColor[randomBodyColor];



    // randomize shape with border radius
    
    randomShape = Math.floor(Math.random()* randomShapeBorder.length);
    shape.style.borderRadius = randomShapeBorder[randomShape];


    // Fetch time and display below the box
    timeList.innerHTML += `<li>${time.toFixed(3)} seconds</li>`
    timeSum+=time;

    // Reset the timer after click on shape
    time = 0;


    // Increase counter
    recordCounter++;
    recordCounterToReset++;

    // Display this text after clicked at least one time
    recordsNumber.innerHTML = `Times recorded: ${recordCounter}`;


    // So that it overflows if the list of records gets a little long
    if(recordCounter >= 5){
        timeList.style.maxHeight = '100px'
        timeList.style.overflowY = 'scroll';
    }

    if(recordCounterToReset == 10){
        tenTapsElement.innerHTML = `<p>It took you <b>${timeSum.toFixed(3)} </b>seconds for <b>10</b> clicks.</p>`;
        recordCounterToReset = 0;
        timeSum = 0;
    } else {
        tenTapsElement.innerHTML = "";
    }
})



//----------- Timer functionality starts here ---------------------

let timerItem = document.querySelector("#timerItem");
let recordsNumber = document.querySelector("#records-number");

let time = 0;

recordsNumber.innerHTML = recordCounter == 0 && 'Start playing by clicking the shape.';

window.addEventListener("load", () => {
    
    function startTimer(){
        time+=0.01;
        timerItem.innerHTML = time.toFixed(3);
    }

    setInterval(()=>{
        startTimer();
    }, 10)
    

  });
  