//const winston = require('lib/winston-patched');
const winston = require('winston');

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      //json: true,
      //colorize: true
      level: process.env.LOG_LEVEL || 'info',
      timestamp: true,
      handleExceptions: true, // needed/useful ??
      humanReadableUnhandledException: true, // needed/useful ??
      prettyPrint : true, // https://github.com/winstonjs/winston/pull/109
      expressFormat: true, // needed/useful ??
      json: false,  //true,
      // colorize only when logging to a terminal, see: http://stackoverflow.com/a/34825574/2474068
      colorize: process.stdout.isTTY
    })
  ]
});

module.exports = logger;
