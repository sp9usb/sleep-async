var expect = require('chai').expect;
var sleep = require('../sleep-async')();

describe('sleep.test', function() {
  before(function (done) {
    done();
  });

  describe('Sleep tests', function () {

    describe('When sleep with timeout.', function () {
      var startTime = null;
      var stopTime = null;
      before(function (done) {
        startTime = new Date().getTime();
        sleep.sleep(5000, function(){
          stopTime = new Date().getTime();
          done();
        });
      });

      it('Should wake up after sleep time.', function () {
        var difference = stopTime-startTime;
        expect(difference).to.be.lessThan(5000+500);
      });

    });

    describe('When sleep with condition.', function () {
      var startTime = null;
      var stopTime = null;
      var collection = [];
      before(function (done) {
        startTime = new Date().getTime();
        sleep.sleepWithCondition(
          function(){
            var conditionResult = collection.length > 97;
            return conditionResult;
          },
          5000,
          function(){
            stopTime = new Date().getTime();
            done();
          });
        for(var i = 0; i < 100; i++){
          collection.push(i);
        }
      });

      it('Should wake up when condition is true.', function () {
        var difference = stopTime-startTime;
        expect(difference).to.be.lessThan(5000);
      });

    });
  });
});