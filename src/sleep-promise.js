module.exports = function sleepPromise(classicSleepAsync) {
    return {
        sleep: function (timeout) {
            return new Promise(function promiseFunction(resolve) {
                classicSleepAsync.sleep(timeout, function done(err){
                    resolve();
                });
            });
        }, 
        sleepWithCondition: function (condition, optionsOrTimeout) {
            return new Promise(function promiseFunction(resolve, reject){
                classicSleepAsync.sleep(condition, optionsOrTimeout, function done(){
                    resolve();
                });
            });
        }
    }
};