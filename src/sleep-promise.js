module.exports = function sleepPromise(classicSleepAsync) {
    return {
        sleep: function (timeout) {
            return new Promise(function promiseFunction(resolve) {
                classicSleepAsync.sleep(timeout, function done(){
                    resolve();
                });
            });
        }, 
        sleepWithCondition: function (condition, optionsOrTimeout) {
            return new Promise(function promiseFunction(resolve, reject){
                classicSleepAsync.sleepWithCondition(condition, optionsOrTimeout, function done(){
                    resolve();
                });
            });
        }
    }
};