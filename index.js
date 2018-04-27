const classicSleepAsync = require('./src/sleep-async')();
const sleepPromise = require('./src/sleep-promise')(classicSleepAsync);

module.exports = function() {
    return {
        ...classicSleepAsync,
        Promise: {
            ...sleepPromise
        }
    };
}