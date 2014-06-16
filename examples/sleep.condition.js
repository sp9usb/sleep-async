var sleep = require('../sleep-async')();

var startTime = null;
var stopTime = null;
var collection = [];

startTime = new Date().getTime();
sleep.sleepWithCondition(function(){
    return collection.length >= 10;
  },
  5000,
  function(){
    stopTime = new Date().getTime();
    console.log('Difference: '+((stopTime-startTime)/1000)+' [s]');
});

for(var i = 0; i < 10; i++){
  console.log('Adding '+(i+1)+' item to collection.');
  collection.push(i);
}