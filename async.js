// Demonstrates asynchronous nature of Javascript with Timeout
console.log("Bitten first. Turned.");

// Timeout could represent and an ajax request...
setTimeout(function(){ 
  console.log("Bitten second. But took longer to turn.")
}, 1000);

console.log("Bitten third. Turned.");