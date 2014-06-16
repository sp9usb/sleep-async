var sleep = require('../sleep-async')();

var startTime = null;
var stopTime = null;

startTime = new Date().getTime();
sleep.sleep(5000, function(){
  stopTime = new Date().getTime();
  console.log('Difference: '+((stopTime-startTime)/1000)+' [s]');
});

console.log('It\'s last command on file.');