// //you caught a liberal snowflake, great job!
// //jump over maga hats while trolls are chasing you

// //any pop-ups, about narractive?

// //Questions about collision into the hats
// //Question about having the game in an container vs the body/window of the browser
// //Questions about local storage, collecting the users' name
window.onload = function () {
  const body = document.body;
  let obama = document.createElement('div');
  let snowflake = document.createElement('div');
  let hat = document.createElement('div');

//  // //creating a div with a class ".obama" to add Barack to the screen
function createObama() {
  let obama = document.createElement('div');
  obama.classList.add('obama');
  body.appendChild(obama);
  return obama
 }
createObama();

// // create new element that will be the Liberal Snowflake for Obama to catch
// //set new element to class of snowflake
function makeLiberalSnowflake() {
  snowflake.classList.add('snowflake');
  body.appendChild(snowflake);
  return snowflake

 }
makeLiberalSnowflake();

// //create a function to move the snowflake so they are falling down the page using CSS styles.
// //Using math.random() * window.innerHeight

function moveSnowflake () {
  snowflake.style.top = Math.random() * innerHeight +'px';
  // snowflake.style.left = Math.random() * innerWidth + 'px';
}
moveSnowflake();

// //create new element for the MAGA hat that will also fall from Sky and Obama needs to avoid
// //assign hat to the class of hat
function stupidRedHat () {
  hat.classList.add('hat');
  body.appendChild(hat);
  return hat
}
stupidRedHat();

// //create a function to move the hat so they are falling down the page using CSS styles.
// //Using math.random() * window.innerHeight
function moveHat () {
  hat.style.top = (Math.random() * innerHeight) + 'px';
  // hat.style.left =(Math.random() * innerWidth) + 'px';
}
moveHat();

// //function to move the hat and snowflake elements every second
function flyingElements () {
  setInterval(function() {
  moveHat();
  moveSnowflake();
}, 800)
}
flyingElements();

// //creating a lot of red hats and snowflakes in the screen with for loop function
for (let i=0; i < 5; i++) {
  makeLiberalSnowflake();
  // stupidRedHat();
  console.log("testing");
 }
 };

 // create an event listener function that will remove the snowflake once it has been clicked
 body.addEventListener('click', caughtSnowflake)

 function caughtSnowflake (event) {
  if (event.target.classList[0] === 'snowflake') {
    event.target.classList.add('energize')
  }
 }
 caughtSnowflake();

// window.onload = function () {
//   const body = document.body;
//   let obama = document.createElement('div');
//   let snowflake = document.createElement('div');
//   let hat = document.createElement('div');

// function makeSnowflake () {
//   let snowflake = document.createElement('div');
//   snowflake.classList.add('snowflake');
//   body.appendChild(snowflake);

//   function moveSnowflake() {
//     snowflake.style.top = Math.random() * window.InnerHeight + 'px'
//   };
//   moveSnowflake();
//   setInterval(moveSnowflake, 1000);

//   for (let i= 0; i < 5; i++) {
//     makeSnowflake();
//   };
// }
// }


