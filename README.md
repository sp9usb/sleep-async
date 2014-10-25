Sleep-Async
===========

Non blocking asynchronous sleep, with watching condition.

The library has method:

### sleep(timeout, done)
* `timeout` - sleep time in milisecond,
* `done` - callback runned always after sleep.

### sleepWithCondition(condition, timeout, done)
* `condition` - condition function has checked on any sleep cycle. When condition is true, the sleep is done.
* `timeout` - max timeout to sleep. 
* `done` - callback runned always after sleep.

### sleepWithCondition(condition, options, done)
* `condition` - condition function has checked on any sleep cycle. When condition is true, the sleep is done.
* `options` - advanced options for sleep.
  + full options example:
  ```javascript
    var options = {
      sleep: 1000,
      interval: 10
    };
  ```
* `done` - callback runned always after sleep.



## Quick exaples

### Required
```javascript
var sleep = require('sleep-async')();
```

### With `sleep(timeout, done)`

```javascript
sleep.sleep(5000, function(){
  stopTime = new Date().getTime();
  console.log('Difference: '+((stopTime-startTime)/1000)+' [s]');
});

```

### With `sleepWithCondition(condition, timeout, done)`

```javascript
sleep.sleepWithCondition(function(){
    return collection.length >= 10;
  },
  5000,
  function(){
    stopTime = new Date().getTime();
    console.log('Difference: '+((stopTime-startTime)/1000)+' [s]');
});
```

### With `sleepWithCondition(donfition, options, done)`

```javascript
var options = {
  sleep: 5000,
  interval: 2500
};

sleep.sleepWithCondition(function(){
    return collection.length >= 10;
  },
  options,
  function(){
    stopTime = new Date().getTime();
    console.log('Difference: '+((stopTime-startTime)/1000)+' [s]');
  });
```

## Examples
If You like this library, please view [example files.](https://github.com/kamil4521/sleep-async/tree/master/examples)
