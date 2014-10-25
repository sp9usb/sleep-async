module.exports = exports = function(){

  function sleep(timeout, condition, interval, done){
    var startTimeInMilisecond = new Date().getTime();
    setTimeout(function(){
      var totalTimeHasExpiredOrConditionIsTrue = ((startTimeInMilisecond + timeout) < (new Date().getTime())) ||
        (condition && typeof(condition) === 'function' &&  condition());
      if(totalTimeHasExpiredOrConditionIsTrue){
        done();
      } else {
        setTimeout(arguments.callee, interval);
      }
    }, interval);
  }

  function isOptions(optionCandidate){
    return typeof(optionCandidate) === 'object';
  }

  function hasValue(value){
    return value !== 'undefined' && value !== 'null';
  }

  return {
    sleep: function(timeout, done){
      sleep(timeout, null, 10, done);
    },
    sleepWithCondition: function(condition, optionsOrTimeout, done){
      var timeout = 10;
      var interval = 10;
      if (isOptions(optionsOrTimeout)){
        if (hasValue(optionsOrTimeout.sleep)){
          timeout = optionsOrTimeout.sleep;
        }
        if (hasValue(optionsOrTimeout.interval)) {
          interval = optionsOrTimeout.interval;
        }
      } else {
        timeout = optionsOrTimeout;
      }
      sleep(timeout, condition, interval, done);
    }
  };
};
