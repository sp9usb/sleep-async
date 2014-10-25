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
        sleep.sleep(500, function(){
          stopTime = new Date().getTime();
          done();
        });
      });

      it('Should wake up after sleep time.', function () {
        var difference = stopTime-startTime;
        expect(difference).to.be.greaterThan(500).and.lessThan(600);
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
          500,
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
        expect(difference).to.be.lessThan(500);
      });

    });

    describe('When sleep with false condition.', function () {
      var startTime = null;
      var stopTime = null;
      before(function (done) {
        startTime = new Date().getTime();
        sleep.sleepWithCondition(
          function(){
            return true == false;
          },
          500,
          function(){
            stopTime = new Date().getTime();
            done();
          });
      });

      it('Should wake up after sleep time.', function () {
        var difference = stopTime-startTime;
        expect(difference).to.be.greaterThan(500).and.lessThan(600);
      });

    });

    describe('When sleep with false condition.', function () {
      var startTime = null;
      var stopTime = null;
      before(function (done) {

        var options = {
          sleep: 500
        };

        startTime = new Date().getTime();
        sleep.sleepWithCondition(
          function(){
            return true == false;
          },
          options,
          function(){
            stopTime = new Date().getTime();
            done();
          });
      });

      it('Should wake up after sleep time options.', function () {
        var difference = stopTime-startTime;
        expect(difference).to.be.greaterThan(500).and.lessThan(600);
      });

    });

    describe('When sleep with condition and interval has changed.', function () {
      var startTime = null;
      var stopTime = null;
      before(function (done) {

        var options = {
          interval: 1000,
          sleep: 500
        };

        startTime = new Date().getTime();
        sleep.sleepWithCondition(
          function(){
            return true == false;
          },
          options,
          function(){
            stopTime = new Date().getTime();
            done();
          });
      });

      it('Should wake up after sleep time with interval options.', function () {
        var difference = stopTime-startTime;
        expect(difference).to.be.greaterThan(1000).and.lessThan(1500);
      });

    });

  });
});