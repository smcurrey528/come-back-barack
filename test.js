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
    moveSnowflake(snowflake) } , 1000);

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
    for (i=0; i < 5; i++) {
      stupidRedHat();
    }
  };

