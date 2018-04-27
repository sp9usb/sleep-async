Sleep-Async
===========

Non blocking asynchronous sleep, with watching condition.

The library have two version:
+ Classic - standard methods with callback function
  - How to initialize object? e.g.
    ```
    const sleep = require('sleep-async')();
    ```
+ Promise - the methods returns Promise object
  - How to initialize object? e.g.
    ```
    const sleep = require('sleep-async')().Promise;
    ```

# Classic library has methods:

- sleep(timeout, done)
  + `timeout` - sleep time in milisecond,
  + `done` - callback runned always after sleep.

- sleepWithCondition(condition, timeout, done)
  + `condition` - condition function has checked on any sleep cycle. When condition is true, the sleep is done.
  + `timeout` - max timeout to sleep. 
  + `done` - callback runned always after sleep.

- sleepWithCondition(condition, options, done)
  + `condition` - condition function has checked on any sleep cycle. When condition is true, the sleep is done.
  + `options` - advanced options for sleep.
    * full options example:
      ```javascript
        const options = {
          sleep: 1000,
          interval: 10
        };
      ```
  + `done` - callback runned always after sleep.


## Quick exaples

- Required
  ```javascript
  const sleep = require('sleep-async')();
  ```

- With `sleep(timeout, done)`

  ```javascript
  sleep.sleep(5000, function(){
    stopTime = new Date().getTime();
    console.log('Difference: '+((stopTime-startTime)/1000)+' [s]');
  });

  ```

- With `sleepWithCondition(condition, timeout, done)`

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

- With `sleepWithCondition(condition, options, done)`

  ```javascript
  const options = {
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


# Promise library has methods:

- sleep(timeout) : Promise
  + `timeout` - sleep time in milisecond

- sleepWithCondition(condition, timeout) : Promise
  + `condition` - condition function has checked on any sleep cycle. When condition is true, the sleep is done.
  + `timeout` - max timeout to sleep. 

- sleepWithCondition(condition, options) : Promise
  + `condition` - condition function has checked on any sleep cycle. When condition is true, the sleep is done.
  + `options` - advanced options for sleep.
    * full options example:
      ```javascript
        const options = {
          sleep: 1000,
          interval: 10
        };
      ```


## Quick exaples

- Required
  ```javascript
  const sleep = require('sleep-async')().Promise;
  ```

- With `sleep(timeout)`

  ```javascript
  const startTime = new Date().getTime();

  sleep.sleep(5000)
    .then(() => new Date().getTime())
    .then(stopTime => console.log('Difference: '+((stopTime-startTime)/1000)+' [s]'));

  ```

- With `sleepWithCondition(condition, timeout)`

  ```javascript
  const startTime = new Date().getTime();

  sleep.sleepWithCondition(function(){
      return collection.length >= 10;
    },
    5000
  )
    .then(() => new Date().getTime())
    .then(stopTime => console.log('Difference: '+((stopTime-startTime)/1000)+' [s]'));
  ```

- With `sleepWithCondition(condition, options)`

  ```javascript
  const options = {
    sleep: 5000,
    interval: 2500
  };

  const startTime = new Date().getTime();

  sleep.sleepWithCondition(function(){
      return collection.length >= 10;
    },
    options
  )
    .then(() => new Date().getTime())
    .then(stopTime => console.log('Difference: '+((stopTime-startTime)/1000)+' [s]'));
  ```