const classicSleepAsync = require('./src/sleep-async')();

module.exports = function() {
    return {
        ...classicSleepAsync,
    };
}