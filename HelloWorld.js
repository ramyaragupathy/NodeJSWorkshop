var config = require('./config.json');
module.exports.message ="Hello World!";
module.exports.messageFn = function(){return "just a message " + config.user + " "+ config.topic};