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

  return {
    sleep: function(timeout, done){
      sleep(timeout, null, 10, done);
    },
    sleepWithCondition: function(condition, timeout, done){
      sleep(timeout, condition, 10, done);
    }
  };
};
