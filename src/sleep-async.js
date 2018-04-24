module.exports = exports = function(){

  function sleep(timeout, condition, interval, done){
    const startTimeInMilisecond = new Date().getTime();
    setTimeout(function repeater(){
      let totalTimeHasExpiredOrConditionIsTrue = ((startTimeInMilisecond + timeout) < (new Date().getTime())) ||
        (condition && typeof(condition) === 'function' &&  condition());
      if(totalTimeHasExpiredOrConditionIsTrue){
        done();
      } else {
        setTimeout(repeater, interval);
      }
    }, interval);
  }

  function isOptions(optionCandidate){
    return typeof(optionCandidate) === 'object';
  }

  return {
    sleep: function(timeout, done){
      sleep(timeout, null, 10, done);
    },
    sleepWithCondition: function(condition, optionsOrTimeout, done){
      let timeout = 10;
      let interval = 10;
      if (isOptions(optionsOrTimeout)){
        if (optionsOrTimeout.sleep){
          timeout = optionsOrTimeout.sleep;
        }
        if (optionsOrTimeout.interval) {
          interval = optionsOrTimeout.interval;
        }
      } else {
        timeout = optionsOrTimeout;
      }
      sleep(timeout, condition, interval, done);
    }
  };
};
