Sleep-Async
===========

Non blocking asynchronous sleep, with watching condition.

The library has two method:

### sleep(timeout, done)
* `timeout` - sleep time in milisecond,
* `done` - callback runned always after sleep.

### sleep(condition, timeout, done)
* `condition` - condition function has checked on any sleep cycle. When condition is true, the sleep is done.
* `timeout` - max timeout to sleep. 
* `done` - callback runned always after sleep.


## Quick exaples

### Required
```
var sleep = require('sleep-async')();
```

### With `sleep(timeout, done)`

```
sleep.sleep(5000, function(){
  stopTime = new Date().getTime();
  console.log('Difference: '+((stopTime-startTime)/1000)+' [s]');
});

```

### With `sleep(condition, timeout, done)`

```
sleep.sleepWithCondition(function(){
    return collection.length >= 10;
  },
  5000,
  function(){
    stopTime = new Date().getTime();
    console.log('Difference: '+((stopTime-startTime)/1000)+' [s]');
});
```

## Examples
If You like this library, please view [example files.](https://github.com/kamil4521/sleep-async/tree/master/examples)
