let grayBtn = document.getElementById("grayButton");
let whiteBtn = document.getElementById("whiteButton");
let blueBtn = document.getElementById("blueButton");
let yellowBtn = document.getElementById("yellowButton");

// 3 -- Write an event handler to change the color of the page when each circle is pressed.

function switchToGray(){
  let body = document.querySelector('body');
  body.style.backgroundColor = 'gray';
  body.style.color = 'white'
}

function switchToWhite(){
    let body = document.querySelector('body');
    body.style.backgroundColor = 'white';
    body.style.color = 'gray'
  }

function switchToBlue(){
    let body = document.querySelector('body');
    body.style.backgroundColor = 'blue';
    body.style.color = 'yellow'
  }

function switchToYellow(){
    let body = document.querySelector('body');
    body.style.backgroundColor = 'yellow';
    body.style.color = 'blue'
  }
// 2 -- Add an event listener to each circle
grayBtn.addEventListener('click', switchToGray)
whiteBtn.addEventListener('click', switchToWhite)
blueBtn.addEventListener('click', switchToBlue)
yellowBtn.addEventListener('click', switchToYellow)