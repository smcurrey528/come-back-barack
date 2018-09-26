//you caught a liberal snowflake, great job!
//jump over maga hats while trolls are chasing you

//any pop-ups, about narractive?

//Questions about collision into the hats
//Question about having the game in an container vs the body/window of the browser
//Questions about local storage, collecting the users' name
window.onload = function () {
  const body = document.body;
  let obama = document.createElement('div');
  let snowflake = document.createElement('div');
  let hat = document.createElement('div');

 // //creating a div with a class ".obama" to add Barack to the screen
function createObama() {
let obama = document.createElement('div');
obama.classList.add('obama');
body.appendChild(obama);
return obama
 }
createObama();

// Creating a new function to make it look like Obama is moving to the left
// using a toggle class to toggle to a new sprite image and using setInterval to toggle class
// NOT WORKING YET
function goLeft () {
  setInterval(function() {
  //   let obama = document.createElement('div');
    obama.classList.toggle("left");
  }, 300)
  console.log('obama go left!');
}
goLeft();

// create new element that will be the Liberal Snowflake for Obama to catch
//set new element to class of snowflake
function makeLiberalSnowflake() {
let snowflake = document.createElement('div');
snowflake.classList.add('snowflake');
body.appendChild(snowflake);
return snowflake
 }
makeLiberalSnowflake();

//create a function to move the snowflake so they are falling down the page using CSS styles.
//Using math.random() * window.innerHeight
//NOT WORKING YET
function moveSnowflake () {
 snowflake = document.createElement('div');
  snowflake.style.top = Math.random() * innerHeight +'px';
  snowflake.style.left = Math.random() * innerWidth + 'px';
}
moveSnowflake();

//create new element for the MAGA hat that will also fall from Sky and Obama needs to avoid
//assign hat to the class of hat
function stupidRedHat () {
  let hat = document.createElement('div');
  hat.classList.add('hat');
  body.appendChild(hat);
  return hat
}
stupidRedHat();

//create a function to move the hat so they are falling down the page using CSS styles.
//Using math.random() * window.innerHeight
function moveHat () {
  hat.style.top = (Math.random() * innerHeight) + 'px';
  hat.style.left =(Math.random() * innerWidth) + 'px';
}
moveHat();

//function to move the hat and snowflake elements every second

 };

