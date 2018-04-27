const sleepPromise = require('../index')().Promise;
const assert = require('assert');

describe('Promise sleep-async tests:', function(){
  describe('When sleep with timeout', function () {
    it('then should wake up after sleep time.', async function () {
      const startTime = new Date().getTime();
      
      const stopTime = await sleepPromise.sleep(500).then(() => new Date().getTime());
  
      const difference = stopTime-startTime;
      assert.ok(difference >= 500 && difference <= 600);
    });
  
  });
  
  describe('When sleep with condition', function () {
    it('then should wake up when condition is true.', async function () {
  
      let collection = [];
      const startTime = new Date().getTime();

      const sleepWithConditionPromise = sleepPromise.sleepWithCondition(
        function condition() {
          console.log('Checking collection size');
          const conditionResult = collection.length > 97;
          return conditionResult;
        },
        500)
      .then(() => new Date().getTime());

      for (let i = 0; i < 100; i++) {
        collection.push(i);
      }

      const stopTime = await sleepWithConditionPromise;

      const difference = stopTime-startTime;
      assert.ok(difference < 500); 
    });
  
  });
   
  describe('When sleep with false condition', function () {
    it('then should wake up after sleep time.', async function () {
  
      const startTime = new Date().getTime();
      const stopTime = await sleepPromise.sleepWithCondition(
          function(){
            return true == false;
          },
          500)
          .then(() => new Date().getTime());
  
      const difference = stopTime-startTime;
      assert.ok(difference >= 500 && difference <= 600);
    });
  
  });
  
  describe('When sleep with false condition', function () {
    it('then should wake up after sleep time options.', async function () {
      
      const options = {
        sleep: 500
      };
  
      const startTime = new Date().getTime();
      const stopTime = await sleepPromise.sleepWithCondition(
          function(){
            return true === false;
          },
          options)
          .then(() => new Date().getTime());
  
      const difference = stopTime-startTime;
      assert.ok(difference >= 500 && difference <= 600);
    });
  
  });
  
  describe('When sleep with condition and interval has changed', function () {
    it('then should wake up after sleep time with interval options.', async function () {
  
      const options = {
        interval: 1000,
        sleep: 500
      };
  
      const startTime = new Date().getTime();
      
      const stopTime = await sleepPromise.sleepWithCondition(
          function(){
            return true === false;
          },
          options)
          .then(() => new Date().getTime());
  
      const difference = stopTime-startTime;
      assert.ok(difference >= 1000 && difference <= 1500);
    });
  
  });
});