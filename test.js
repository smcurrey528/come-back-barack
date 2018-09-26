// //you caught a liberal snowflake, great job!
// //jump over maga hats while trolls are chasing you

// //any pop-ups, about narractive?

// //Questions about collision into the hats
// //Question about having the game in an container vs the body/window of the browser
// //Questions about local storage, collecting the users' name
//onload function
window.onload = function () {
  //set const variables
const body = document.body;

  let obama = document.createElement('div');
  let snowflake = document.createElement('div');
  let hat = document.createElement('div');
  let endGame = false;
//  // //creating a div with a class ".obama" to add Barack to the screen

  function createObama() {
  let obama = document.createElement('div');
  obama.classList.add('obama');
  body.appendChild(obama);
  return obama
 }
createObama();

 function makeSnowflake () {
  let snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  body.appendChild(snowflake);

 function moveSnowflake(snowflake) {
  snowflake.style.top = Math.random() * window.innerHeight + 'px'
  snowflake.style.left = Math.random() * window.innerWidth + 'px'
 }
  moveSnowflake(snowflake);
  setInterval(function() {
    moveSnowflake(snowflake) } , 5000);

  return snowflake;
}
  for (i=0; i < 5; i++) {
    makeSnowflake();
  }


  function stupidRedHat () {
    let hat = document.createElement('div');
    hat.classList.add('hat');
    body.appendChild(hat);

    function moveHat(hat) {
      hat.style.top = Math.random() * window.innerHeight + 'px'
      hat.style.left = Math.random() * window.innerWidth + 'px'
    }
    moveHat(hat);
    setInterval(function(){
      moveHat(hat) }, 1000);
    return hat;
    }
    for (i=0; i < 7; i++) {
      stupidRedHat();
    }


  //everything is working above, yasss queen

  //function to create an event listener when player clicks the snowflake
// got information about changing progress bar value from w3schools https://www.w3schools.com/jsref/prop_progress_value.asp
body.addEventListener('click', energizeObama);

function energizeObama (event) {
  if (event.target.classList[0] === 'snowflake') {
  event.target.classList.add('energize')

  document.querySelector('progress').value += 10;

 setTimeout(function() {
    let bolt = document.querySelector('.energize')
  bolt.remove(); checkForWinner();
  }, 1000)
  }
}

energizeObama();
//accidentially pushed to my personal github so need to figure that out tomorrow https://github.com/smcurrey528/come-back-barack
//create a function so that if user clicks on the red hat then they lose the game
//NOT WORKING YET
body.addEventListener('click', exhaustObama)
function exhaustObama (event) {
  if (event.target.classList[0] === 'hat') {
    alert("You clicked on the MAGA hat and exhausted Obama. He had to go back to his safe space, so YOU LOSE")
  }
}
exhaustObama();

//create function to check for winner
function checkForWinner () {
  if (document.querySelector('progress').value === 100) {
    alert('You energized Obama...Yes, we can! Yes, we can! Great job, you win!')
  }
}
//function to reset game
//https://www.w3schools.com/jsref/met_loc_reload.asp
function restart () {
  document.location.reload();
}
restart();

 };


