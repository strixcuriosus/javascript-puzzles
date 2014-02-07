// problem: why does it log out out 1000?
// fix it to log 100, 200, 300, 400, 500 etc

// loops 10 times from 0 - 1000 in increments of 100

// this will run a callback function after waiting milliseconds
var milliseconds = 0;
function waitFor() {
  if (milliseconds < 1000){
   milliseconds += 100;
   console.log(milliseconds);
   setTimeout(waitFor, milliseconds);
  }
}

waitFor();


//originally the code with a for loop was not blocking -- it kept looping while waitFor is waiting.
